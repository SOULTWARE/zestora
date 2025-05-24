import { z } from 'zod';

export const reservationSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters long' }).max(100),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number (e.g., +1234567890)' }),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), { message: 'Invalid date format' })
    .refine((date) => new Date(date) >= new Date(new Date().setHours(0,0,0,0)), { message: 'Date cannot be in the past' }),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid time format (HH:MM)' }),
  numberOfGuests: z.coerce.number().min(1, { message: 'Must be at least 1 guest' }).max(20, { message: 'Cannot exceed 20 guests' }),
  specialRequests: z.string().max(500, { message: 'Special requests cannot exceed 500 characters' }).optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
