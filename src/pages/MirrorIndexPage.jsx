
import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useQuiz } from '@/context/QuizContext.jsx';
import QuizQuestion from '@/components/QuizQuestion.jsx';
import LeadCaptureForm from '@/components/LeadCaptureForm.jsx';
import ResultsPage from '@/components/ResultsPage.jsx';

function QuizRouter() {
  const { currentStep } = useQuiz();

  return (
    <div className="flex-1 section-container py-12 lg:py-24 flex flex-col justify-center min-h-[80vh]">
      <AnimatePresence mode="wait">
        {currentStep === 'quiz' && <QuizQuestion key="quiz" />}
        {currentStep === 'leadCapture' && <LeadCaptureForm key="leadCapture" />}
        {currentStep === 'results' && <ResultsPage key="results" />}
      </AnimatePresence>
    </div>
  );
}

function MirrorIndexPage() {
  return (
    <>
      <Helmet>
        <title>The Mirror Index™ | The Mirror™</title>
        <meta name="description" content="Take The Mirror Index™ assessment to measure your emotional labor and self-abandonment patterns." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col pt-20">
        <Header />
        
        <main className="flex-1 flex flex-col relative">
          <div className="noise-overlay" />
          <QuizRouter />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MirrorIndexPage;
