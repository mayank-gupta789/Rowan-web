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

function AboutPage() {
  const values = [
    {
      label: '01',
      title: 'Identity over discipline',
      description: 'We do not obsess over willpower. We obsess over the quiet, structural rebuilding of self-trust and personal boundaries.'
    },
    {
      label: '02',
      title: 'Radical honesty',
      description: 'You cannot shame yourself into lasting change. We dismantle the guilt associated with putting yourself first.'
    },
    {
      label: '03',
      title: 'Structural integrity',
      description: 'Motivation fades. Integrity remains. We build systems that protect your energy when everyone else wants a piece of it.'
    },
    {
      label: '04',
      title: 'Becoming visible',
      description: 'Transformation happens the moment you stop abandoning yourself to keep the peace, and start showing up for your own life.'
    }
  ];

  const credentials = [
    'Creator of The Mirror™',
    'Specialist in Behavioral Architecture',
    'Expert in Identity Reclamation',
    'Helping women eradicate self-abandonment'
  ];

  return (
    <>
      <Helmet>
        <title>About Rowan | The Mirror™</title>
        <meta name="description" content="Meet Rowan, the Identity Architect behind The Mirror™. Learn about the philosophy of ending self-abandonment and helping women become visible again." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-20">
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl mb-20">
              <p className="eyebrow mb-8">About</p>
              <h1
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                className="text-foreground mb-8"
              >
                About The Mirror™
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded on a singular truth: the deepest pain we experience is the pain of abandoning ourselves to serve everyone else.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
              <motion.div {...fadeUp}>
                <img
                  src="https://horizons-cdn.hostinger.com/c462ad97-2c48-41a4-986b-7eb33eb67b55/screenshot-2026-06-16-143909-ridP9.png"
                  alt="Rowan, Identity Architect and founder of The Mirror™"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  style={{ borderRadius: '2px' }}
                />
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h2
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
                  className="text-foreground mb-8"
                >
                  My story
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    I did not begin this work by wanting to teach people how to be more disciplined. I began because I realized how profoundly painful it is to be highly capable, yet entirely invisible to yourself.
                  </p>
                  <p>
                    For years, I watched brilliant women try everything—new routines, intense self-help, rigid rules—only to end up exhausted, carrying the emotional labor for their families and careers, and quietly breaking promises to themselves in the dark.
                  </p>
                  <p>
                    I realized that you do not have a discipline problem. You have a self-abandonment problem. When you spend your life people-pleasing, managing others' emotions, and putting your needs last, you erode the very foundation of your identity.
                  </p>
                  <p>
                    I became an Identity Architect because someone needs to help you rebuild that structure. The Mirror™ is the space where the self-abandonment ends. We help you lay down the invisible load and finally become the priority in your own life again.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-card border-y border-border">
          <div className="section-container">
            <motion.div {...fadeUp} className="mb-16">
              <p className="eyebrow mb-4">The Philosophy</p>
              <h2
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
                className="text-foreground max-w-2xl"
              >
                The principles that govern identity reclamation.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-px bg-border">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-card p-10 md:p-12"
                >
                  <span className="mono-label block mb-6">{value.label}</span>
                  <h3
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', lineHeight: 1.3 }}
                    className="text-foreground mb-4"
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeUp}>
                <p className="eyebrow mb-6">The Framework</p>
                <h2
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.2 }}
                  className="text-foreground mb-8"
                >
                  The Architect's Framework
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  My work is not about generic motivation. It is highly structural. I help women map out the areas where they leak energy, where they carry others' burdens, and where they disappear, and then we build firm architecture to bring them back to the center.
                </p>
                <div className="space-y-4 mb-10">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="rule-rose w-8 flex-shrink-0" />
                      <span className="text-foreground">{credential}</span>
                    </div>
                  ))}
                </div>
                <Link to="/book-call" className="btn-primary">
                  Book A Conversation
                </Link>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <img
                  src="https://horizons-cdn.hostinger.com/c462ad97-2c48-41a4-986b-7eb33eb67b55/670952893_18387867790094695_6998309280235734383_n-wgj9G.jpg"
                  alt="Rowan speaking and guiding women"
                  className="w-full h-auto object-cover aspect-video"
                  style={{ borderRadius: '2px' }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-card border-y border-border">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="eyebrow mb-8">Why This Work</p>
              <div
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.5 }}
                className="text-foreground space-y-6 mb-12"
              >
                <p>
                  There is a very specific tragedy in watching a capable, brilliant woman look in the mirror and feel entirely hollow. She has kept everyone else's life running smoothly, but she has defaulted on every promise made to herself.
                </p>
                <p>
                  I do this work because I know what happens on the other side of that pain. When a woman finally puts the weight down, draws a boundary, and keeps one small promise to herself — the light comes back on. She becomes a force.
                </p>
                <p>
                  If you are tired of living in the gap between who you know you are and how you actually show up daily, it is time for us to talk.
                </p>
              </div>
              <Link to="/book-call" className="btn-primary">
                Book A Conversation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
