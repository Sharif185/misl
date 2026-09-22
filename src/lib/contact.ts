export interface ContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export const CONTACT_BACKEND_NOT_CONFIGURED = 'CONTACT_BACKEND_NOT_CONFIGURED';

/**
 * Submission extension point.
 *
 * The MISL Technologies contact backend is not implemented in this
 * repository. This function deliberately rejects until a real endpoint
 * exists, so the UI never falsely reports a successful submission.
 *
 * To connect a backend, replace the body below with a real request, e.g.:
 *
 *   const res = await fetch('/api/contact', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) {
 *     throw new Error('Failed to send message');
 *   }
 */
export async function submitContactForm(
  payload: ContactPayload,
): Promise<void> {
  void payload;
  throw new Error(CONTACT_BACKEND_NOT_CONFIGURED);
}