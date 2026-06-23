import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function PricingCard({ name, price, period, features, isRecommended = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`card-premium h-full flex flex-col relative ${
        isRecommended ? 'scale-105 ring-2 ring-primary shadow-xl shadow-primary/10' : ''
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          Recommended
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tabular-nums">${price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/book-call"
        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] ${
          isRecommended
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
        }`}
      >
        Get started
      </Link>
    </motion.div>
  );
}

export default PricingCard;