import React from 'react';
import { motion } from 'framer-motion';

function SuccessStoryCard({ name, metrics, story, timeframe, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border border-border p-8"
    >
      <h3
        style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.375rem', lineHeight: 1.3 }}
        className="text-foreground mb-2"
      >
        {name}
      </h3>
      <p className="eyebrow mb-8">{timeframe}</p>

      <div className="grid grid-cols-2 gap-px bg-border mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-background p-5">
            <span
              style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.75rem', color: 'hsl(var(--primary))' }}
              className="block mb-1"
            >
              {metric.value}
            </span>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</p>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm">
        {story}
      </p>
    </motion.div>
  );
}

export default SuccessStoryCard;
