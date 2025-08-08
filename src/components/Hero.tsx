import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const fallbackAvatarDataUri =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 240 240">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#7c3aed" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="6" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="240" height="240" rx="120" fill="url(#g)" />
  <g filter="url(#glow)">
    <circle cx="120" cy="92" r="40" fill="#ffffff" opacity="0.95" />
    <path d="M40,210 a80,80 0 0,1 160,0" fill="#ffffff" opacity="0.95" />
  </g>
  <circle cx="46" cy="50" r="6" fill="#fff" opacity="0.5" />
  <circle cx="200" cy="70" r="8" fill="#fff" opacity="0.35" />
  <circle cx="180" cy="190" r="5" fill="#fff" opacity="0.25" />
</svg>
`);

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleImgError = () => {
    if (imgRef.current) {
      imgRef.current.src = fallbackAvatarDataUri;
    }
  };

  return (
    <section id="home" className="w-full min-h-screen flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Kuldeep Singh
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
            Data Scientist
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            I build data-driven products: from exploratory analysis and feature engineering to
            deploying robust ML systems. Passionate about NLP, time-series forecasting, and MLOps.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link to="projects" smooth duration={500} className="inline-block">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium shadow hover:shadow-lg"
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500} className="inline-block">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-900 font-medium shadow-sm hover:shadow"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Tip: add your photo as <code>/public/profile.jpg</code> for a personalized look.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ rotate: -1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 blur opacity-40"></div>
            <img
              ref={imgRef}
              src="/profile.jpg"
              onError={handleImgError}
              alt="Kuldeep Singh"
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover ring-4 ring-white shadow-[0_10px_40px_rgba(99,102,241,0.35)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/30" />
            <div className="pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

