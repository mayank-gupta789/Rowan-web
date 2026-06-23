import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SuccessStoryCard from '@/components/SuccessStoryCard.jsx';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

function SuccessStoriesPage() {
  const successStories = [
    {
      beforeImage: 'https://images.unsplash.com/photo-1649051048592-d608a127c8ed',
      afterImage: 'https://images.unsplash.com/photo-1649051048592-d608a127c8ed',
      name: 'Sarah, 42, Senior Manager',
      timeframe: '6 months in The Mirror™',
      metrics: [
        { value: '100%', label: 'Boundaries Honored' },
        { value: '0', label: 'Guilt-Driven Decisions' }
      ],
      story: 'Sarah came to me utterly depleted. Her default state was: "I carry everyone\'s problems." She managed her team, her household, and the emotional ecosystem of her extended family. She had entirely disappeared. In The Mirror™, we didn\'t look for productivity hacks. We rebuilt her identity. She learned to say no without catastrophic guilt. Today, she operates from a new baseline: "I choose what I carry."'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1699206791200-414d95e68450',
      afterImage: 'https://images.unsplash.com/photo-1699206791200-414d95e68450',
      name: 'Maya, 38, Architect',
      timeframe: '8 months in The Mirror™',
      metrics: [
        { value: '100%', label: 'Self-Trust Restored' },
        { value: '10x', label: 'Personal Visibility' }
      ],
      story: 'Maya was a classic case of: "I know what to do, I just don\'t do it." She had tried every planner, every routine, and every rulebook. She felt like a failure. We identified that the issue wasn\'t discipline; it was a profound lack of self-trust from years of abandoning her own needs. Through quiet, structural work, she rebuilt trust in herself. She shifted from feeling invisible to becoming entirely visible to herself.'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1614522236054-d221ab3f673d',
      afterImage: 'https://images.unsplash.com/photo-1614522236054-d221ab3f673d',
      name: 'Elena, 45, Entrepreneur',
      timeframe: '5 months in The Mirror™',
      metrics: [
        { value: '100%', label: 'Guilt-Free Rest' },
        { value: '0', label: 'Self-Abandonment' }
      ],
      story: 'Elena built a successful business by sacrificing herself at the altar of hard work. Her internal narrative was: "I don\'t have time for myself." Her identity was entirely wrapped up in being the provider. We carefully extracted her worth from her output. She learned that resting wasn\'t a reward for burning out—it was a right. The transformation was internal: from exhausted provider to a woman who firmly believes, "I matter too."'
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8',
      afterImage: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8',
      name: 'Lucia, 39, Creative Director',
      timeframe: '7 months in The Mirror™',
      metrics: [
        { value: '100%', label: 'Needs Prioritized' },
        { value: '0', label: 'People-Pleasing' }
      ],
      story: 'Lucia lived for external validation. She said yes to every project, every favor, every request, while privately drowning in resentment. Her starting point was: "I am everything to everyone." We worked through the terror of disappointing others. She stopped abandoning her truth to keep the peace. Today, her boundaries are unshakeable. She is no longer trying to be good; she is finally being honest.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Identities Reclaimed | The Mirror™</title>
        <meta name="description" content="Read the profound identity transformations of women who stopped abandoning themselves, set boundaries, and rebuilt their self-trust in The Mirror™." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-20">
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl mb-20">
              <p className="eyebrow mb-8">Stories</p>
              <h1
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                className="text-foreground mb-8"
              >
                Identities Reclaimed
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                These are the stories of women who stopped trying to "fix" themselves with discipline, and instead chose the profound work of ending self-abandonment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {successStories.map((story, index) => (
                <SuccessStoryCard
                  key={index}
                  beforeImage={story.beforeImage}
                  afterImage={story.afterImage}
                  name={story.name}
                  metrics={story.metrics}
                  story={story.story}
                  timeframe={story.timeframe}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-card border-y border-border">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeUp}>
                <p className="eyebrow mb-6">The Common Thread</p>
                <h2
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.2 }}
                  className="text-foreground mb-8"
                >
                  The Common Thread
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
                  <p>
                    None of these women needed a new planner, a better morning routine, or more willpower. They were already highly capable and deeply exhausted.
                  </p>
                  <p>
                    The transformation happened when they realized that they couldn't be everything to everyone without eventually becoming nothing to themselves. The work was structural: learning to tolerate the discomfort of prioritizing themselves.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    'Stopped equating worth with output',
                    'Learned to tolerate others\' disappointment',
                    'Rebuilt undeniable self-trust'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="rule-rose w-8 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="border border-border p-10"
              >
                <h3
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.75rem', lineHeight: 1.25 }}
                  className="text-foreground mb-5"
                >
                  Your Turn
                </h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  If you see yourself in these stories, the first step is understanding exactly what you're carrying.
                </p>
                <Link to="/mirror-index" className="btn-primary w-full flex justify-center">
                  Take The Mirror Index™
                </Link>
                <p className="eyebrow text-center mt-5">Takes 5 minutes. Confidential.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SuccessStoriesPage;
