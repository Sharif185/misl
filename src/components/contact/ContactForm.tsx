'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/contactSchema';
import { Button } from '@/components/ui/Button';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const budgetOptions = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure'];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      message: '',
    },
  });

  const messageLength = watch('message')?.length ?? 0;

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Request failed');

      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-cyan/20 bg-navy p-10 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan bg-cyan/10">
          <svg
            className="h-8 w-8 text-cyan"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-white">Message Sent!</h3>
        <p className="mb-6 text-[#8892B0]">
          Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
          Check your inbox — we sent you a confirmation too.
        </p>
        <Button variant="outline" onClick={() => setSubmitStatus('idle')}>
          Send Another Message
        </Button>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="rounded-xl border border-cyan/20 bg-navy p-8"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[#CCD6F6]">
            Full Name <span className="text-cyan" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            {...register('name')}
            className={[
              'rounded-lg border bg-[#112240] px-4 py-3 text-sm text-[#CCD6F6]',
              'placeholder:text-[#8892B0] outline-none transition-colors duration-200',
              'focus:border-cyan focus:ring-1 focus:ring-cyan',
              errors.name ? 'border-red-400' : 'border-cyan/20',
            ].join(' ')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[#CCD6F6]">
            Email Address <span className="text-cyan" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            {...register('email')}
            className={[
              'rounded-lg border bg-[#112240] px-4 py-3 text-sm text-[#CCD6F6]',
              'placeholder:text-[#8892B0] outline-none transition-colors duration-200',
              'focus:border-cyan focus:ring-1 focus:ring-cyan',
              errors.email ? 'border-red-400' : 'border-cyan/20',
            ].join(' ')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-[#CCD6F6]">
            Company{' '}
            <span className="text-xs font-normal text-[#8892B0]">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            {...register('company')}
            className={[
              'rounded-lg border border-cyan/20 bg-[#112240] px-4 py-3 text-sm text-[#CCD6F6]',
              'placeholder:text-[#8892B0] outline-none transition-colors duration-200',
              'focus:border-cyan focus:ring-1 focus:ring-cyan',
            ].join(' ')}
          />
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-sm font-medium text-[#CCD6F6]">
            Budget Range <span className="text-cyan" aria-hidden="true">*</span>
          </label>
          <select
            id="budget"
            aria-required="true"
            aria-describedby={errors.budget ? 'budget-error' : undefined}
            aria-invalid={!!errors.budget}
            {...register('budget')}
            className={[
              'rounded-lg border bg-[#112240] px-4 py-3 text-sm text-[#CCD6F6]',
              'outline-none transition-colors duration-200 cursor-pointer',
              'focus:border-cyan focus:ring-1 focus:ring-cyan',
              errors.budget ? 'border-red-400' : 'border-cyan/20',
            ].join(' ')}
          >
            <option value="" disabled>
              Select a budget…
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#112240] text-[#CCD6F6]">
                {opt}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p id="budget-error" role="alert" className="text-xs text-red-400">
              {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-6 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[#CCD6F6]">
          Message <span className="text-cyan" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project or inquiry…"
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          {...register('message')}
          className={[
            'resize-none rounded-lg border bg-[#112240] px-4 py-3 text-sm text-[#CCD6F6]',
            'placeholder:text-[#8892B0] outline-none transition-colors duration-200',
            'focus:border-cyan focus:ring-1 focus:ring-cyan',
            errors.message ? 'border-red-400' : 'border-cyan/20',
          ].join(' ')}
        />
        <div className="flex items-start justify-between">
          {errors.message ? (
            <p id="message-error" role="alert" className="text-xs text-red-400">
              {errors.message.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-[#8892B0]">{messageLength} / 2000</span>
        </div>
      </div>

      {/* Error banner */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400"
        >
          Something went wrong sending your message. Please try again or email us at{' '}
          <a href="mailto:hello@misltechnologies.com" className="underline">
            hello@misltechnologies.com
          </a>
          .
        </div>
      )}

      {/* Submit */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          disabled={submitStatus === 'loading'}
          className="w-full sm:w-auto"
        >
          {submitStatus === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Sending…
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </form>
  );
}
