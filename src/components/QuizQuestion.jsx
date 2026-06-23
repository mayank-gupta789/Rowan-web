
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useQuiz, QUIZ_QUESTIONS } from '@/context/QuizContext.jsx';

const OPTIONS = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Always" }
];

function QuizQuestion() {
  const {
    currentQuestion,
    answers,
    setAnswer,
    nextQuestion,
    prevQuestion
  } = useQuiz();

  const totalQuestions = 25;
  const currentAnswer = answers[currentQuestion];
  const questionText = QUIZ_QUESTIONS[currentQuestion];
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  const isLastQuestion = currentQuestion === totalQuestions;

  const handleOptionSelect = (value) => {
    setAnswer(currentQuestion, value);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`question-${currentQuestion}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <span className="eyebrow">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <div className="w-full h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: `${((currentQuestion - 1) / totalQuestions) * 100}%` }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <h2
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.3 }}
          className="text-foreground mb-12"
        >
          {questionText}
        </h2>

        <div className="space-y-3 mb-16">
          {OPTIONS.map((opt) => {
            const isSelected = currentAnswer === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect(opt.value)}
                className={`w-full flex items-center p-5 border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 mr-5 transition-colors ${
                  isSelected ? 'border-primary' : 'border-muted-foreground'
                }`}>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2.5 h-2.5 bg-primary"
                    />
                  )}
                </div>
                <span className={`text-base font-medium ${isSelected ? 'text-foreground' : 'text-foreground/70'}`}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-border">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 1}
            className={`flex items-center gap-2 text-muted-foreground transition-colors font-medium text-sm ${currentQuestion === 1 ? 'opacity-0 pointer-events-none' : 'hover:text-foreground'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={nextQuestion}
            disabled={currentAnswer === undefined || currentAnswer === null}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLastQuestion ? 'Complete Assessment' : 'Next Question'}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default QuizQuestion;
