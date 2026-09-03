import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required.')
    .max(100, 'Name must be 100 characters or fewer.'),

  email: z
    .string()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.'),

  company: z
    .string()
    .max(100, 'Company name must be 100 characters or fewer.')
    .optional(),

  budget: z.enum(
    ['', 'Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure'],
    { error: () => 'Please select a budget range.' }
  ),

  message: z
    .string()
    .min(20, 'Message must be at least 20 characters.')
    .max(2000, 'Message must be 2000 characters or fewer.'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
