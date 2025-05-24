'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema, ReservationFormData } from '@/lib/reservation-schema';
import { useState } from 'react';
import { motion } from 'framer-motion';

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 shadow-sm";
const errorClass = "text-red-500 text-sm mt-1";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

const ReservationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      date: new Date().toISOString().split('T')[0], // Default to today
      time: '18:00',
      numberOfGuests: 1,
      specialRequests: '',
    }
  });

  const onSubmit = async (data: ReservationFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Reservation Data:', data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 text-center bg-green-50 border border-green-200 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-semibold text-green-700 mb-3">Reservation Successful!</h3>
        <p className="text-green-600 mb-6">Thank you for your reservation. We look forward to welcoming you to Zestora!</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Make Another Reservation
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gray-200"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="fullName" className={labelClass}>Full Name</label>
        <input id="fullName" type="text" {...register('fullName')} className={inputClass} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input id="email" type="email" {...register('email')} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input id="phone" type="tel" {...register('phone')} className={inputClass} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="date" className={labelClass}>Date</label>
          <input id="date" type="date" {...register('date')} className={inputClass} />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>Time</label>
          <input id="time" type="time" {...register('time')} className={inputClass} />
          {errors.time && <p className={errorClass}>{errors.time.message}</p>}
        </div>
        <div>
          <label htmlFor="numberOfGuests" className={labelClass}>Number of Guests</label>
          <input id="numberOfGuests" type="number" {...register('numberOfGuests')} className={inputClass} />
          {errors.numberOfGuests && <p className={errorClass}>{errors.numberOfGuests.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="specialRequests" className={labelClass}>Special Requests (Optional)</label>
        <textarea id="specialRequests" {...register('specialRequests')} rows={4} className={inputClass} />
        {errors.specialRequests && <p className={errorClass}>{errors.specialRequests.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {isSubmitting ? 'Submitting...' : 'Book Reservation'}
        </button>
      </div>
    </motion.form>
  );
};

export default ReservationForm;
