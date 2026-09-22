'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui';
import {
  CONTACT_BACKEND_NOT_CONFIGURED,
  submitContactForm,
  type ContactPayload,
} from '@/lib/contact';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FieldName = keyof ContactPayload;

type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: ContactPayload = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-\s]{6,}$/;

function validate(values: ContactPayload): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone && values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    const field = name as FieldName;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      setStatusMessage('');
      // Focus the first invalid field for keyboard users.
      const firstErrorField = Object.keys(nextErrors)[0];
      const el = document.querySelector<HTMLElement>(
        `[name="${firstErrorField}"]`,
      );
      el?.focus();
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      await submitContactForm(values);
      setStatus('success');
      setStatusMessage(
        'Thanks — your message has been received. Our team will get back to you shortly.',
      );
      setValues(initialValues);
    } catch (error) {
      setStatus('error');
      if (
        error instanceof Error &&
        error.message === CONTACT_BACKEND_NOT_CONFIGURED
      ) {
        setStatusMessage(
          'This form is not yet connected to a backend. Please email us directly at contact@misltechnologies.com.',
        );
      } else {
        setStatusMessage(
          'Something went wrong while sending your message. Please try again, or email us directly at contact@misltechnologies.com.',
        );
      }
    }
  }

  const isSubmitting = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-heading"
      className="space-y-6"
    >
      <h2 id="contact-form-heading" className="sr-only">
        Contact form
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={inputClass(Boolean(errors.fullName))}
          />
        </Field>

        <Field id="email" label="Email Address" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field id="company" label="Company / Organization">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            className={inputClass(false)}
          />
        </Field>
      </div>

      <Field id="subject" label="Subject" required error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={inputClass(Boolean(errors.subject))}
        />
      </Field>

      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send message'}
        </Button>

        <p className="text-xs text-slate-400">
          Required fields are marked with <span aria-hidden="true">*</span>
          <span className="sr-only">an asterisk</span>.
        </p>
      </div>

      {/* Status region — polite live updates for screen readers */}
      <div
        role="status"
        aria-live="polite"
        className="min-h-[1.25rem] text-sm"
      >
        {status === 'success' && (
          <p className="rounded-md border border-[#00FFAB]/40 bg-[#00FFAB]/10 px-4 py-3 text-[#00FFAB]">
            {statusMessage}
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-red-200">
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-200"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[#00FFAB]" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean): string {
  const base =
    'block w-full rounded-md border bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:ring-2 focus:ring-offset-0';
  return hasError
    ? `${base} border-red-400/60 focus:border-red-400 focus:ring-red-400/40`
    : `${base} border-white/15 focus:border-[#00FFAB] focus:ring-[#00FFAB]/40`;
}
