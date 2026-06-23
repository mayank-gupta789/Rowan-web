import React from 'react';
import { motion } from 'framer-motion';

function MethodCard({ number, icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-premium relative overflow-hidden"
    >
      <div className="absolute top-4 right-4 text-8xl font-bold text-primary/10 leading-none tabular-nums">
        {number}
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default MethodCard;