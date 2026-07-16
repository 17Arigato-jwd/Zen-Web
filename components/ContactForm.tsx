'use client';

import { useState, type FormEvent } from 'react';
import { globalContent } from '@/content/zen-content';

/**
 * Client-side Formspree submit — no API route, no backend (CLAUDE.md).
 * NEXT_PUBLIC_FORMSPREE_ID is inlined at build time; until it is configured,
 * submitting shows a graceful fallback pointing at the direct contact details.
 */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const SUCCESS_MESSAGE =
  'Thank you for reaching out — your message has been sent. We will get back to you soon.';

const inputClasses =
  'mt-2 block w-full rounded-2xl border border-[var(--glass-border)] bg-[rgba(255,255,255,0.45)] px-4 py-3 text-base';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { contact, audiences } = globalContent;

  const notConnectedMessage = `The inquiry form is not connected yet. Please email us at ${contact.email} or call ${contact.phone}.`;
  const failedMessage = `Something went wrong and your message was not sent. Please email us directly at ${contact.email}.`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!FORMSPREE_ID) {
      setErrorMessage(notConnectedMessage);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      if (!response.ok) {
        throw new Error(`Formspree responded with ${response.status}`);
      }
      form.reset();
      setStatus('success');
    } catch {
      setErrorMessage(failedMessage);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold">
          Full name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="text-sm font-semibold">
          Phone (optional)
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-role" className="text-sm font-semibold">
          I am a… (optional)
        </label>
        <select
          id="contact-role"
          name="role"
          defaultValue=""
          className={inputClasses}
        >
          <option value="">Select an option</option>
          {audiences.map((audience) => (
            <option key={audience} value={audience}>
              {audience}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>

      {/* Formspree conventions: custom subject line + honeypot spam trap. */}
      <input
        type="hidden"
        name="_subject"
        value="New inquiry — Zen Enterprises website"
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
      </button>

      <div role="status" aria-live="polite" className="min-h-6">
        {status === 'success' && (
          <p className="rounded-2xl border border-accent-sage/40 bg-accent-sage/15 px-4 py-3 text-sm font-medium">
            {SUCCESS_MESSAGE}
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-2xl border border-accent-terracotta/40 bg-accent-terracotta/15 px-4 py-3 text-sm font-medium">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
