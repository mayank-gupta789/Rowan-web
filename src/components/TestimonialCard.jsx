import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

function TestimonialCard({ photo, name, outcome, quote, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-premium h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={photo}
          alt={name}
          className="w-14 h-14 rounded-xl object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-primary font-medium">{outcome}</p>
        </div>
      </div>
      <div className="relative flex-1">
        <Quote className="w-8 h-8 text-primary/20 mb-3" />
        <p className="text-muted-foreground leading-relaxed italic">
          "{quote}"
        </p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;