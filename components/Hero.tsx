import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home/hero-background.svg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-5xl font-bold md:text-7xl"
        >
          Welcome to Zestora
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-8 text-xl md:text-2xl"
        >
          Where flavor meets finesse
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="/menu"
            className="rounded-lg bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-orange-600"
          >
            View Menu
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
