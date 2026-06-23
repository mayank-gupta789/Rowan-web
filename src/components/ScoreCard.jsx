
import React from 'react';
import { motion } from 'framer-motion';

const BAND_CONTENT = {
  "Protected": {
    headline: "You are still protecting some of your space.",
    meaning: "You are not fully disappearing, but this score does not mean you should ignore the patterns. You still need to protect your time, energy, and identity before life starts taking more from you.",
    firstStep: "Choose one non negotiable for yourself this week and protect it."
  },
  "Stretched": {
    headline: "You are starting to lose space for yourself.",
    meaning: "You are not in crisis, but the warning signs are there. Your needs are starting to get pushed down. You may still function well on the outside, but your internal capacity is being stretched.",
    firstStep: "Pick one place this week where you stop over explaining and simply say no."
  },
  "Overloaded": {
    headline: "You are carrying more than you should.",
    meaning: "You are not failing. You are overloaded. This is where consistency starts breaking because your body and mind are trying to cope with too much at once.",
    firstStep: "Identify one thing you are carrying that belongs to another adult and stop rescuing it this week."
  },
  "Disappearing": {
    headline: "You have been disappearing under the load.",
    meaning: "This is the point where your own life starts becoming an afterthought. You may still be showing up for everyone else, but you are no longer showing up for yourself. You are not short on discipline. You are short on space.",
    firstStep: "Choose one thing you do from guilt and pause it this week."
  },
  "Survival Mode": {
    headline: "You are beyond capacity.",
    meaning: "This is not a motivation problem. This is not a willpower problem. You have spent too long being needed by everyone else and abandoned by yourself. Your body is not betraying you. It is showing you the cost.",
    firstStep: "Choose one load you can put down immediately. One responsibility. One expectation. One guilt driven yes."
  }
};

function ScoreCard({ band }) {
  const content = BAND_CONTENT[band] || BAND_CONTENT["Survival Mode"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3
        style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.3 }}
        className="text-foreground mb-6"
      >
        {content.headline}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
        {content.meaning}
      </p>
      <div className="border-l-2 border-primary pl-6">
        <p className="eyebrow mb-3">First Step</p>
        <p className="text-foreground leading-relaxed">{content.firstStep}</p>
      </div>
    </motion.div>
  );
}

export default ScoreCard;
