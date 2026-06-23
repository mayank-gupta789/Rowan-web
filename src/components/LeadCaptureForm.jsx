
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQuiz } from '@/context/QuizContext.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number')
});

function LeadCaptureForm() {
  const { setLeadData, submitResults } = useQuiz();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    setLeadData(data.name, data.email, data.phone);
    submitResults();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="mb-12">
        <p className="eyebrow mb-6">Almost there</p>
        <h2
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}
          className="text-foreground mb-4"
        >
          Where should we send your result?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Enter your details below to receive your personalised Mirror Index score.
        </p>
      </div>

      <div className="border border-border p-8 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              className="mt-2 input-premium"
              {...register('name')}
            />
            {errors.name && <p className="text-sm text-destructive mt-2">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="mt-2 input-premium"
              {...register('email')}
            />
            {errors.email && <p className="text-sm text-destructive mt-2">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+44 7700 000000"
              className="mt-2 input-premium"
              {...register('phone')}
            />
            {errors.phone && <p className="text-sm text-destructive mt-2">{errors.phone.message}</p>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn-primary w-full py-4"
            >
              Get My Result
            </button>
          </div>

          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            By submitting, you agree to receive your Mirror Index result and follow-up support from The Mirror™. Your information is strictly confidential.
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export default LeadCaptureForm;
