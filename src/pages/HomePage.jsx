import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

function HomePage() {
  return (
    <>
      <Helmet>
        <title>The Mirror™ | Become The Priority In Your Own Life Again</title>
        <meta name="description" content="The Mirror™ is an identity reclamation movement for women who have spent long enough carrying everyone else's world." />
      </Helmet>

      <Header />

      <main>
        {/* 1. Hero */}
        <section className="relative min-h-[100dvh] flex items-end pb-24 overflow-hidden">
          <div className="noise-overlay" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-4xl"
            >
              <p className="eyebrow mb-8">The Mirror™</p>
              <h1
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                className="text-foreground mb-10"
              >
                Become the priority<br />in your own life again.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                You have spent years making yourself smaller so everyone else could be comfortable. The Mirror™ is where that ends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link to="/mirror-index" className="btn-primary">
                  Take The Mirror Index™
                </Link>
                <Link to="/about" className="btn-secondary">
                  The Philosophy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Manifesto */}
        <section className="section-spacing bg-card border-y border-border">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto">
              <p className="eyebrow mb-8 text-center">A Manifesto</p>
              <div
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.4, letterSpacing: '0.01em' }}
                className="text-foreground text-center space-y-6"
              >
                <p>This is not about discipline.</p>
                <p>This is not about another morning routine, another productivity system, or another attempt to become a better version of the person you are not.</p>
                <p>This is about the quiet, devastating cost of abandoning yourself to keep everyone else whole.</p>
                <p className="text-primary">The Mirror™ is where self-abandonment ends.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. The Invisible Load */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="mb-16">
              <p className="eyebrow mb-4">The Invisible Load</p>
              <h2
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
                className="text-foreground max-w-2xl"
              >
                You are not struggling because you are weak.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-px bg-border">
              {[
                {
                  label: '01',
                  title: 'You carry the mental load for everyone.',
                  body: 'You are the project manager of your household, your relationships, and your workplace. You anticipate every need before it is spoken. You are always on.'
                },
                {
                  label: '02',
                  title: 'You feel guilty choosing yourself.',
                  body: 'The moment you try to rest, say no, or put your own needs first, guilt arrives immediately. So you shrink back. And back. And back.'
                },
                {
                  label: '03',
                  title: 'You know what to do. You still don\'t do it.',
                  body: 'You have read the books. You understand the principles. And yet every promise you make to yourself gets quietly broken. This is not a discipline problem.'
                },
                {
                  label: '04',
                  title: 'You have disappeared underneath your roles.',
                  body: 'Mother. Manager. Partner. Fixer. You look in the mirror and the woman looking back is a stranger. She is competent. She is exhausted. She has forgotten herself.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-background p-10 md:p-12"
                >
                  <span className="mono-label block mb-6">{item.label}</span>
                  <h3
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', lineHeight: 1.25 }}
                    className="text-foreground mb-4"
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Mirror Index */}
        <section className="section-spacing bg-card border-y border-border">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <p className="eyebrow mb-6">The Diagnostic</p>
                <h2
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
                  className="text-foreground mb-8"
                >
                  The Mirror Index™
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  25 questions. 5 minutes. A precise measurement of how far you have drifted from yourself — and the real reason you struggle to show up for your own life.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  This is not a quiz. It is a diagnostic framework built to name exactly what you are carrying and show you the structural work required to put it down.
                </p>
                <Link to="/mirror-index" className="btn-primary">
                  Take The Mirror Index™
                </Link>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="border border-border p-10 md:p-12"
              >
                <p className="eyebrow mb-8">Five bands of depletion</p>
                <div className="space-y-5">
                  {['Protected', 'Stretched', 'Overloaded', 'Disappearing', 'Survival Mode'].map((band, i) => (
                    <div key={band} className="flex items-center gap-5">
                      <span
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.05em' }}
                        className="text-muted-foreground w-6 text-right flex-shrink-0"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="rule-rose w-6" />
                      <span className="text-foreground text-sm font-medium">{band}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Philosophy */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="mb-16">
              <p className="eyebrow mb-4">The Philosophy</p>
              <h2
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
                className="text-foreground max-w-2xl"
              >
                What we actually believe.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                {
                  title: 'Identity over discipline.',
                  body: 'Willpower is a short-term strategy. Identity is a structural shift. We do not obsess over habits. We rebuild the self that makes consistent self-honoring inevitable.'
                },
                {
                  title: 'Self-abandonment is the root.',
                  body: 'Every pattern you cannot break — the people-pleasing, the over-giving, the late-night promises to yourself that dissolve by morning — traces back to one source. We address the source.'
                },
                {
                  title: 'You are not the problem.',
                  body: 'You were conditioned. You learned, very early, that making yourself smaller kept the peace. The Mirror™ helps you unlearn that conditioning permanently.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-background p-10 md:p-12"
                >
                  <h3
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', lineHeight: 1.3 }}
                    className="text-foreground mb-5"
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pull Quote */}
        <section className="section-spacing bg-card border-y border-border">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
              <span className="rule-rose w-16 mx-auto block mb-12" />
              <blockquote
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.35, letterSpacing: '0.01em' }}
                className="text-foreground mb-12"
              >
                "The moment you stop abandoning yourself to keep the peace is the moment you become a force."
              </blockquote>
              <span className="rule-rose w-16 mx-auto block" />
            </motion.div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-2xl">
              <p className="eyebrow mb-8">Begin</p>
              <h2
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
                className="text-foreground mb-8"
              >
                If you are tired of living in the gap between who you know you are and how you actually show up.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                The Mirror Index™ takes five minutes. It will name exactly what you are carrying and give you the first structural step toward putting it down.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link to="/mirror-index" className="btn-primary">
                  Take The Mirror Index™
                </Link>
                <Link to="/book-call" className="btn-secondary">
                  Apply for a Conversation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
