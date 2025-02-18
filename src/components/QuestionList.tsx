import React, { useEffect, useState } from 'react';
import styles from './components_style/QuestionList.module.scss';
import { Problem } from '../utils/types';
import { useNavigate } from 'react-router-dom';
interface QuestionListProps {
    problems: Problem[];
    language: string;
    version: string;
}

const QuestionList: React.FC<QuestionListProps> = ({ problems, language, version }) => {
    const [questions, setQuestions] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(problems);
        setLoading(false);
    }, [problems]);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Available Questions</h2>
            {problems.length === 0 ? (
                <p className={styles.noQuestions}>No questions available for this selection.</p>
            ) : (
                <ul className={styles.list}>
                    {questions.map((problem: Problem) => (
                        <li key={problem.id} className={styles.questionItem} onClick={() => navigate(`/question/${problem.id}/${language}/${version}`)}>
                            <span className={styles.title}>{problem.title}</span>
                            <span className={`${styles.difficulty} ${styles[problem.difficulty.name.toLowerCase()]}`}>
                                {problem.difficulty.name}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default QuestionList;
