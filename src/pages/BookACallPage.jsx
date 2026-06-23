import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  situation: z.string().min(10, 'Please describe your situation (at least 10 characters)'),
  availability: z.string().optional()
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

function BookACallPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    try {
      const submissions = JSON.parse(localStorage.getItem('conversationSubmissions') || '[]');
      const newSubmission = {
        ...data,
        submittedAt: new Date().toISOString(),
        id: Date.now()
      };
      submissions.push(newSubmission);
      localStorage.setItem('conversationSubmissions', JSON.stringify(submissions));

      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      reset();
      toast.success('Request received');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Apply | The Mirror™</title>
        <meta name="description" content="Book a confidential conversation to discuss becoming the priority in your own life again." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-20">
        <section className="section-spacing">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-3xl mb-20">
              <p className="eyebrow mb-8">Apply</p>
              <h1
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
                className="text-foreground mb-8"
              >
                Book A Conversation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A confidential dialogue about becoming the priority in your own life again. No pressure. Just a real conversation about how The Mirror™ can help.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="border border-border p-8 mb-8">
                  <h2
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', lineHeight: 1.3 }}
                    className="text-foreground mb-8"
                  >
                    What happens next
                  </h2>
                  <div className="space-y-8">
                    {[
                      {
                        step: '01',
                        title: 'We Review',
                        body: 'I will read your situation to understand the load you are currently carrying.'
                      },
                      {
                        step: '02',
                        title: 'Fast Response',
                        body: 'We respond within 24 hours to schedule a time that works for you.'
                      },
                      {
                        step: '03',
                        title: 'A Quiet Conversation',
                        body: 'We will unpack your patterns of self-abandonment and discuss the path forward.'
                      }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6">
                        <span className="mono-label flex-shrink-0 pt-0.5">{item.step}</span>
                        <div>
                          <p className="font-medium text-foreground mb-1">{item.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Deep Visibility',
                      description: 'We read every form deeply. You are seen before we even speak.'
                    },
                    {
                      title: 'Sacred Confidentiality',
                      description: 'Your patterns, struggles, and identity work remain entirely private.'
                    },
                    {
                      title: 'No Pressure',
                      description: 'This is a genuine conversation about structural change, not a sales pitch.'
                    }
                  ].map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex items-start gap-4 border border-border p-5"
                    >
                      <span className="rule-rose w-8 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{element.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{element.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {isSubmitted ? (
                  <div className="border border-border p-10 text-center min-h-[400px] flex flex-col justify-center">
                    <span className="rule-rose w-16 mx-auto block mb-10" />
                    <h3
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.75rem', lineHeight: 1.25 }}
                      className="text-foreground mb-5"
                    >
                      Request received
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      Thank you for booking a conversation. We'll reach out within 24 hours to confirm your time. You've taken the first step toward putting the weight down.
                    </p>
                    <a
                      href="https://chat.whatsapp.com/HFdHiURU9237IZS6PSbzHq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex justify-center"
                    >
                      Join WhatsApp Community
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="border border-border p-8">
                    <h3
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.5rem', lineHeight: 1.3 }}
                      className="text-foreground mb-8"
                    >
                      Start your reclamation
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Full name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="mt-2 input-premium"
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="mt-2 input-premium"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Phone number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+44 7700 000000"
                          className="mt-2 input-premium"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="situation" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Current situation</Label>
                        <Textarea
                          id="situation"
                          placeholder="What's making it hard to prioritise yourself right now?"
                          className="mt-2 input-premium min-h-[120px]"
                          {...register('situation')}
                        />
                        {errors.situation && (
                          <p className="text-sm text-destructive mt-1">{errors.situation.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="availability" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Availability (optional)</Label>
                        <Input
                          id="availability"
                          type="text"
                          placeholder="E.g., Weekdays after 3pm"
                          className="mt-2 input-premium"
                          {...register('availability')}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting…' : 'Book A Conversation'}
                      </button>

                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        Your request is strictly confidential. By booking, you agree to our Privacy Policy.
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BookACallPage;
