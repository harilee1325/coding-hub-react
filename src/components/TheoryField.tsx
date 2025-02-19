import { Box, Heading } from "@chakra-ui/react";
import { Theory } from "../utils/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReactNode } from "react";

interface TheoryFieldProps {
    theory: Theory;
}

interface CodeProps {
    node?: any;
    inline?: boolean;
    className?: string;
    children?: ReactNode;
}

const CodeBlock: React.FC<CodeProps> = ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
        <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
            {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

const TheoryField = ({ theory }: TheoryFieldProps) => {
    return (
        <Box p={5} maxW="100%" boxShadow="lg" borderRadius="md" >
            <Heading size="lg" mb={4}>{theory.title}</Heading>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code: CodeBlock,
                }}
            >
                {theory.content}
            </ReactMarkdown>
        </Box>
    );
};

export default TheoryField;
