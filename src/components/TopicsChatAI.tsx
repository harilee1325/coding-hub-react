// ChatLayout.tsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./components_style/Chat.module.css";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const TopicsChatAI: React.FC = () => {
    // Left panel state

    // Chat messages for the current channel
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Ref to auto-scroll to bottom of chat
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Send user message & call Mistral Ollama
    const handleSendMessage = async () => {
        if (!input.trim()) return;

        // 1) Add the user’s message to the chat
        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages as Message[]);
        setInput("");
        setIsLoading(true);

        // 2) Build a prompt from the conversation
        // (The Mistral Ollama approach might simply pass each line with "role: content")
        const prompt = newMessages.map((msg) => `${msg.role}: ${msg.content}`).join("\n");

        // 3) Stream from Mistral Ollama
        let fullResponse = "";
        try {
            const response = await fetch("http://localhost:11435/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "mistral",
                    prompt: prompt,
                    max_tokens: 1000,
                }),
            });

            const reader = response.body?.getReader();
            const decoder = new TextDecoder("utf-8");
            let done = false;

            while (!done) {
                const { value, done: doneReading } = await reader!.read();
                done = doneReading;
                if (value) {
                    const chunkValue = decoder.decode(value);
                    // The chunkValue might contain multiple lines of JSON
                    const lines = chunkValue.split("\n").filter((line) => line.trim() !== "");
                    for (const line of lines) {
                        try {
                            const obj = JSON.parse(line);
                            if (obj.response) {
                                fullResponse += obj.response;
                                // Optionally, update partial text for streaming

                            }
                        } catch (e) {
                            console.error("Error parsing chunk:", e, line);
                        }
                    }
                }
            }
            setMessages((prev) => {
                const updated = [...prev];
                // The last message is the assistant's partial text
                const lastIndex = updated.findIndex((m) => m.role === "assistant" && m.content.endsWith("…streaming"));
                if (lastIndex >= 0) {
                    updated[lastIndex] = {
                        role: "assistant",
                        content: fullResponse,
                    };
                } else {
                    // If there's no assistant partial yet, add it
                    updated.push({ role: "assistant", content: fullResponse });
                }
                return updated;
            });
        } catch (err) {
            console.error("Error fetching response:", err);
            // On error, add a message
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, an error occurred." },
            ]);
        } finally {
            setIsLoading(false);
            // Ensure final fullResponse is appended as a complete assistant message
            setMessages((prev) => {
                // If we never added an assistant partial, add it now
                if (!fullResponse) {
                    return [
                        ...prev,
                        { role: "assistant", content: "No response from the model." },
                    ];
                }
                // Otherwise, finalize the partial
                const updated = [...prev];
                const lastIndex = updated.findIndex((m) => m.role === "assistant");
                if (lastIndex >= 0) {
                    updated[lastIndex] = {
                        role: "assistant",
                        content: fullResponse,
                    };
                } else {
                    updated.push({ role: "assistant", content: fullResponse });
                }
                return updated;
            });
        }
    };

    return (
        <div className={styles.container}>
            {/* Main chat area */}
            <div className={styles.chatArea}>
                <div className={styles.chatHeader}>
                    <h2>
                        Learn about the topic
                    </h2>
                </div>

                <div className={styles.chatMessages}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`${styles.message} ${msg.role === "user" ? styles.user : styles.assistant
                                }`}
                        >
                            <p>
                                {msg.role === "user" ? "You: " : "AI: "}
                                {msg.content}
                            </p>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className={styles.chatInputArea}>
                    <input
                        className={styles.chatInput}
                        placeholder="Send a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className={styles.sendButton}
                        onClick={handleSendMessage}
                        disabled={isLoading}
                    >
                        {isLoading ? "..." : "Send"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopicsChatAI;
