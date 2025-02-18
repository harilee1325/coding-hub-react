import { Box, HStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";
import Output from "./Output";
import useLocalStorage from "../hooks/useLocalStorage";

interface CodeEditorProps {
    language: string;
    version: string;
    defaultCode: string; // fresh default code from backend
    onCodeChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    language,
    version,
    defaultCode,
    onCodeChange,
}) => {
    // Create a unique key for this language/version.
    const storageKey = `code-${language}-${version}`;
    // Use our custom hook to persist the code.
    // Note: even if there is a value in localStorage,
    // we want to override it every time we come to this page.
    const [code, setCode] = useState<string>(defaultCode);
    const editorRef = useRef<any>(null);

    // On mount or whenever defaultCode changes, update localStorage & state
    useEffect(() => {
        // Force override any previously stored value with the new default.
        localStorage.setItem(storageKey, JSON.stringify(defaultCode));
        setCode(defaultCode);
        onCodeChange(defaultCode);
        if (!code) {
            if (editorRef.current) {
                editorRef.current.setValue(defaultCode);
            }

        }
        // We want this to run every time defaultCode changes.
    }, [defaultCode, setCode, onCodeChange, storageKey]);

    const handleEditorDidMount = (editor: any) => {
        editorRef.current = editor;
        // Set the editor content using our current state
        editor.setValue(code);
    };

    const handleEditorChange = (value: string | undefined) => {
        const newValue = value || "";
        setCode(newValue);
        onCodeChange(newValue);
        localStorage.setItem(storageKey, JSON.stringify(newValue));

    };

    return (
        <Box>
            <HStack gap={4}>
                <Box w="60%">
                    <Text>{language}</Text>
                    <Editor
                        options={{ minimap: { enabled: false } }}
                        height="75vh"
                        theme="vs-dark"
                        language={language}
                        // Remove defaultValue; we're controlling it via our hook & state.
                        value={code}
                        onMount={handleEditorDidMount}
                        onChange={handleEditorChange}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} version={version} />
            </HStack>
        </Box>
    );
};

export default CodeEditor;
