// src/hooks/useMbtiTest.js
import { useState } from 'react';
import { mbtiQuestions as defaultQuestions } from '../data/mbtiQuestions';
import { calculateMbtiType } from '../utils/mbtiCalculator';

const useMbtiTest = (questions = defaultQuestions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = Math.round((currentQuestionIndex / totalQuestions) * 100);
  
  const answerQuestion = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const mbtiResult = calculateMbtiType(newAnswers, questions);
      setResult(mbtiResult);
      setIsCompleted(true);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };
  
  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setIsCompleted(false);
  };
  
  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    isCompleted,
    result,
    answers,
    answerQuestion,
    goToPreviousQuestion,
    resetTest
  };
};

export default useMbtiTest;
