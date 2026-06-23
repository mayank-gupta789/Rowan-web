
import React, { createContext, useContext, useState, useMemo } from 'react';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QUIZ_QUESTIONS = {
  1: "If I do not plan something, it usually does not happen.",
  2: "People rely on me to notice what needs doing.",
  3: "I carry lots of small tasks in my head.",
  4: "I feel responsible for keeping life moving.",
  5: "I absorb other people's stress.",
  6: "I avoid asking for what I need.",
  7: "I put other people's feelings first.",
  8: "I suppress my own emotions.",
  9: "I often feel unseen.",
  10: "I am the last person on my own list.",
  11: "I struggle to make time for myself.",
  12: "I feel guilty when I choose myself.",
  13: "I cancel on myself.",
  14: "I rarely have uninterrupted time.",
  15: "I say yes when I want to say no.",
  16: "I over explain my boundaries.",
  17: "I take responsibility for other adults.",
  18: "I struggle to protect my time.",
  19: "I often over give.",
  20: "I feel tired in a way sleep does not fix.",
  21: "I know what I need to do but cannot do it.",
  22: "I use food, scrolling, or distractions to cope.",
  23: "I do not feel like myself anymore.",
  24: "My body feels like evidence I have stopped choosing myself.",
  25: "I have stopped feeling like a priority in my own life."
};

const BANDS = [
  { max: 20, name: "Protected" },
  { max: 40, name: "Stretched" },
  { max: 60, name: "Overloaded" },
  { max: 80, name: "Disappearing" },
  { max: 100, name: "Survival Mode" }
];

export const QuizProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState('quiz'); // 'quiz', 'leadCapture', 'results'
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
  const [score, setScore] = useState(0);
  const [band, setBand] = useState('');

  const setAnswer = (questionNumber, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionNumber]: value
    }));
  };

  const updateLeadData = (name, email, phone) => {
    setLeadData({ name, email, phone });
  };

  const calculateScore = () => {
    let total = 0;
    for (let i = 1; i <= 25; i++) {
      total += (answers[i] || 0);
    }
    return total;
  };

  const determineBand = (calculatedScore) => {
    const foundBand = BANDS.find(b => calculatedScore <= b.max);
    return foundBand ? foundBand.name : "Survival Mode";
  };

  const submitResults = () => {
    const finalScore = calculateScore();
    const finalBand = determineBand(finalScore);
    setScore(finalScore);
    setBand(finalBand);
    setCurrentStep('results');
  };

  const resetQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestion(1);
    setAnswers({});
    setLeadData({ name: '', email: '', phone: '' });
    setScore(0);
    setBand('');
  };

  const nextQuestion = () => {
    if (currentQuestion < 25) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep('leadCapture');
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const value = {
    currentStep,
    setCurrentStep,
    currentQuestion,
    answers,
    leadData,
    score,
    band,
    setAnswer,
    setLeadData: updateLeadData,
    submitResults,
    resetQuiz,
    nextQuestion,
    prevQuestion
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
