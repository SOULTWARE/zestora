'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

const contactInfoData = [
  {
    icon: <MapPin className="h-6 w-6 text-[#FF7E5F]" />,
    label: 'Base',
    value: siteConfig.company.location,
  },
  {
    icon: <Mail className="h-6 w-6 text-[#FF7E5F]" />,
    label: 'Email',
    value: siteConfig.company.email,
  },
  {
    icon: <Globe className="h-6 w-6 text-[#FF7E5F]" />,
    label: 'Website',
    value: siteConfig.company.url,
  },
  {
    icon: <Sparkles className="h-6 w-6 text-[#FF7E5F]" />,
    label: 'Service Areas',
    value: 'Texas, the United States, and Canada',
  },
];

const pageTitleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const contactInfoListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const contactInfoItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const mapVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' } },
};

export default function ContactPageClient() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1
          variants={pageTitleVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 text-center text-4xl font-bold text-[#FFF8F0] md:text-5xl"
        >
          Contact SOULTWARE About a Site Like This
        </motion.h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#FDF6EC]/75">
          Zestora is a live demo. If you want a website with the same level of polish, performance, SEO, and AI-readable structure,
          use this page or visit SOULTWARE directly.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="rounded-lg border border-[#2a2a2a] bg-[#181818] p-6 shadow-lg md:p-8">
              <motion.h2
                className="mb-6 text-2xl font-semibold text-[#FFF8F0]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Contact Information
              </motion.h2>
              <motion.div className="space-y-5" variants={contactInfoListVariants}>
                {contactInfoData.map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start space-x-4"
                    variants={contactInfoItemVariants}
                  >
                    <div className="flex-shrink-0 pt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-[#FFF8F0]">{item.label}</h3>
                      <p className="text-[#FDF6EC]/80">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 rounded-lg border border-[#2a2a2a] bg-[#121212] p-6"
                variants={mapVariants}
              >
                <h3 className="mb-3 text-xl font-semibold text-[#FFF8F0]">Preferred Next Step</h3>
                <p className="mb-4 text-[#FDF6EC]/80">
                  For active project inquiries, the strongest conversion path is directly through the SOULTWARE site.
                </p>
                <Link
                  href={siteConfig.company.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#FF7E5F] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#ff6d4a]"
                >
                  Open soultware.com contact page
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-lg border border-[#2a2a2a] bg-[#181818] p-6 shadow-lg md:p-8">
              <motion.h2
                className="mb-6 text-2xl font-semibold text-[#FFF8F0]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Send Us a Message
              </motion.h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
