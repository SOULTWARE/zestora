import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div className="relative aspect-[1.5] h-full w-full">
        <Image
          src="/images/home/hero-background.webp"
          alt="Zestora Restaurant Hero"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-5xl font-bold md:text-7xl"
        >
          Welcome to Zestora
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-8 max-w-2xl px-4 text-lg text-gray-200 md:text-xl"
        >
          Where every dish tells a story of passion, tradition, and innovation
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="/reservation"
            className="rounded-full bg-[#FF7E5F] px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#FF7E5F]/90 hover:shadow-lg hover:shadow-[#FF7E5F]/20"
          >
            Make a Reservation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
