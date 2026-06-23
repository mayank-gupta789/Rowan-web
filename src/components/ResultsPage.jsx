
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext.jsx';
import ScoreCard from '@/components/ScoreCard.jsx';

function ResultsPage() {
  const { leadData, score, band } = useQuiz();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto py-8"
    >
      <div className="mb-16">
        <p className="eyebrow mb-6">Your Result</p>
        <p
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.4 }}
          className="text-foreground mb-12"
        >
          {leadData?.name ? `${leadData.name}, here is what you are carrying.` : 'Here is what you are carrying.'}
        </p>

        <div className="border border-border p-10 md:p-14 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20 mb-12 pb-12 border-b border-border">
            <div>
              <p className="eyebrow mb-4">Mirror Index Score</p>
              <div className="flex items-baseline gap-2">
                <span
                  style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: 1, color: 'hsl(var(--primary))' }}
                >
                  {score}
                </span>
                <span
                  style={{ fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: '1.5rem', color: 'hsl(var(--muted-foreground))' }}
                >
                  /100
                </span>
              </div>
            </div>

            <div className="hidden md:block w-px self-stretch bg-border" />

            <div>
              <p className="eyebrow mb-4">Your Band</p>
              <span
                style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'hsl(var(--primary))' }}
              >
                {band}
              </span>
            </div>
          </div>

          <ScoreCard band={band} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        {/* WhatsApp Community */}
        <a
          href="https://chat.whatsapp.com/HFdHiURU9237IZS6PSbzHq"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-border p-10 hover:border-primary transition-colors duration-200"
        >
          <div>
            <p className="eyebrow mb-3">Community</p>
            <h3
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.25 }}
              className="text-foreground mb-3"
            >
              Join The Mirror WhatsApp Community
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Connect with women unlearning the exact same patterns of self-abandonment.
            </p>
          </div>
          <span className="btn-primary flex-shrink-0">
            Join Now
          </span>
        </a>

        {/* Book A Call */}
        <div className="border border-border p-10 md:p-12">
          <p className="eyebrow mb-6">The Next Step</p>
          <h3
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', lineHeight: 1.3 }}
            className="text-foreground mb-5 max-w-2xl"
          >
            You do not need another plan. You need space to become the priority again.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
            A confidential conversation about ending your cycle of carrying it all.
          </p>
          <Link to="/book-call" className="btn-primary">
            Book A Mirror Call
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ResultsPage;
