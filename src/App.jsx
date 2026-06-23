
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import MirrorIndexPage from '@/pages/MirrorIndexPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import SuccessStoriesPage from '@/pages/SuccessStoriesPage.jsx';
import BookACallPage from '@/pages/BookACallPage.jsx';
import TheMethodPage from '@/pages/TheMethodPage.jsx';
import { QuizProvider } from '@/context/QuizContext.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Wrap MirrorIndexPage with QuizProvider so context is cleanly scoped and available */}
        <Route path="/mirror-index" element={
          <QuizProvider>
            <MirrorIndexPage />
          </QuizProvider>
        } />
        
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book-call" element={<BookACallPage />} />
        <Route path="/the-method" element={<TheMethodPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Page not found</h1>
              <p className="text-muted-foreground mb-6">The page you are looking for does not exist.</p>
              <a href="/" className="btn-primary inline-flex">Back to home</a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
