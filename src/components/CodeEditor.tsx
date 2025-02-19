import React, { useRef, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
    language: string;
    version: string;
    defaultCode: string;
    onCodeChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    language,
    version,
    defaultCode,    
    onCodeChange,
}) => {
    const [code, setCode] = useState<string>(defaultCode);
    const editorRef = useRef<any>(null);

    useEffect(() => {
        setCode(defaultCode);
    }, [defaultCode]);

    const handleEditorDidMount = (editor: any) => {
        editorRef.current = editor;
        editor.setValue(defaultCode);
    };

    const handleEditorChange = (value: string | undefined) => {
        const newValue = value || "";
        setCode(newValue);
        onCodeChange(newValue);
    };

    return (
        <Box height="75vh">
            <Text mb={2}>{language}</Text>
            <Editor
                height="100%"
                theme="vs-dark"
                language={language}
                value={code}
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}
                options={{ minimap: { enabled: false } }}
            />
        </Box>
    );
};

export default CodeEditor;
