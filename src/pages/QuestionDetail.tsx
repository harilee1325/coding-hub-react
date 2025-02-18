import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, HStack, Spinner, Center } from "@chakra-ui/react";
import pb from '../services/pocketbase';
import styles from '../styles/QuestionDetail.module.scss';
import CodeEditor from '../components/CodeEditor';
import { Problem } from '../utils/types';

const QuestionDetail: React.FC = () => {
    const { id, language, version } = useParams<{ id: string, language: string, version: string }>();
    const [problem, setProblem] = useState<Problem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [code, setCode] = useState<string>('');
    const [isLanguageLoading, setIsLanguageLoading] = useState(true);

    useEffect(() => {
        const fetchQuestion = async () => {
            if (!id) {
                setLoading(false);
                setIsLanguageLoading(false);
                return;
            }

            try {
                const record = await pb.collection('problems').getOne<Problem>(id);
                setProblem(record);
                setCode(record.code);
            } catch (error) {
                console.error('Error fetching question:', error);
            }
            setLoading(false);
            setIsLanguageLoading(false);
        };

        fetchQuestion();
    }, []);

    // useEffect(() => {
    //     const fetchLanguage = async () => {
    //         if (!problem?.language) {
    //             setIsLanguageLoading(false);
    //             return;
    //         }
    //         const langId = problem.language;
    //         try {
    //             const languageRecord = await pb.collection('languages').getOne(langId);
    //             // For example, assume the field is called "code_snippet"
    //             setCode(languageRecord.code_snippet);
    //         } catch (error) {
    //             console.error('Error fetching language:', error);
    //         }
    //         setIsLanguageLoading(false);
    //     };

    //     fetchLanguage();
    // }, [problem]);

    if (loading) {
        return (
            <Center height="100vh">
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Center>
        );
    }

    if (!problem) {
        return <p className={styles.error}>Question not found.</p>;
    }

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>

            {/* Question Details Section */}
            <div className={styles.questionSection}>
                <h1 className={styles.title}>{problem.title}</h1>
                <p className={styles.difficulty}>Difficulty: {problem.difficulty.name}</p>
                <div className={styles.description}>
                    {problem.description || 'No description available.'}
                </div>
            </div>

            {isLanguageLoading ? (
                <Center p={8}>
                    <Spinner
                        thickness='3px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='green.500'
                        size='md'
                    />
                </Center>
            ) : (
                <HStack spacing={4} align="flex-start" className={styles.editorSection}>
                    <Box flex={1} className={styles.editorContainer}>
                        <CodeEditor
                            language={language || "javascript"}
                            version={version || "18.15.0"}
                            defaultCode={code}
                            onCodeChange={newCode => setCode(newCode)}
                        />
                    </Box>
                </HStack>
            )}
        </div>
    );
};

export default QuestionDetail;
