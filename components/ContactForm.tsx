'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/contact-form-schema';
import { useState } from 'react';
import { motion } from 'framer-motion';

const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 shadow-sm";
const errorClass = "text-red-500 text-sm mt-1";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call (e.g., to Formspree or your backend)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact Form Data:', data);
    setIsSubmitted(true);
    reset();
    // For Formspree, you would typically do:
    // const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // if (response.ok) { setIsSubmitted(true); reset(); }
    // else { /* Handle error */ }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 text-center bg-green-50 border border-green-200 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
        <p className="text-green-600 mb-4">Thank you for contacting us. We'll get back to you shortly.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200 text-sm"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div>
        <label htmlFor="contactName" className={labelClass}>Full Name</label>
        <input id="contactName" type="text" {...register('name')} className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="contactEmail" className={labelClass}>Email Address</label>
        <input id="contactEmail" type="email" {...register('email')} className={inputClass} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="contactMessage" className={labelClass}>Message</label>
        <textarea id="contactMessage" {...register('message')} rows={5} className={inputClass} />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
