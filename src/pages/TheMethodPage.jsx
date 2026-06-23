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

function TheMethodPage() {
  return (
    <>
      <Helmet>
        <title>The Method | The Mirror™</title>
        <meta name="description" content="The structural framework behind The Mirror™ — how we help women end self-abandonment and rebuild their identity." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-20">
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl mb-20">
              <p className="eyebrow mb-8">The Method</p>
              <h1
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                className="text-foreground mb-8"
              >
                Structural reclamation, not another system.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Mirror™ is not a coaching program. It is a framework for mapping exactly where you have disappeared, and building the structural conditions that allow you to come back.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-px bg-border mb-20">
              {[
                {
                  label: '01',
                  title: 'The Diagnostic',
                  body: 'The Mirror Index™ names precisely where you are on the depletion spectrum. Not vaguely. Not with generic categories. With structural clarity about what you are actually carrying and why it costs you what it does.'
                },
                {
                  label: '02',
                  title: 'The Architecture',
                  body: 'We map the specific areas where you leak energy, carry others\' burdens, and disappear. This is not about building willpower. It is about building the conditions that make self-honoring structurally inevitable.'
                },
                {
                  label: '03',
                  title: 'The Boundary Work',
                  body: 'Learning to say no without catastrophic guilt. Learning to tolerate others\' disappointment without collapsing. Learning that your discomfort at prioritizing yourself is a signal, not a verdict.'
                },
                {
                  label: '04',
                  title: 'The Identity Shift',
                  body: 'The lasting change happens when you stop trying to fix your behavior and start becoming someone whose identity makes self-abandonment impossible. This is the deepest work. This is the only work that lasts.'
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

            <motion.div {...fadeUp} className="border-t border-border pt-16">
              <div className="max-w-2xl">
                <h2
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}
                  className="text-foreground mb-8"
                >
                  Begin with the diagnostic.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  The Mirror Index™ is the entry point. 25 questions. 5 minutes. A precise reading of where you stand, and the first structural step toward putting the load down.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link to="/mirror-index" className="btn-primary">
                    Take The Mirror Index™
                  </Link>
                  <Link to="/book-call" className="btn-secondary">
                    Apply for a Conversation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TheMethodPage;
