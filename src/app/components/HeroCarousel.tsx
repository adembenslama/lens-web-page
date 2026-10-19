'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BannerSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  category: string;
  link: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: '/images/banner/1.png',
    alt: 'Souk Lahbeb au Dock de Paris - Asma Baklouti Event & Lens Production',
    title: 'Souk Lahbeb au Dock de Paris',
    category: 'Événement International',
    link: '#contact'
  },
  {
    id: 2,
    image: '/images/banner/2.png',
    alt: 'Vous fêtez votre mariage en Tunisie ? Collaboration Souk Lahbeb',
    title: 'Votre Mariage en Tunisie',
    category: 'Production Mariage',
    link: '/weddings'
  },
  {
    id: 3,
    image: '/images/banner/3.png',
    alt: 'Marathon International de Casablanca - Couverture Audiovisuelle',
    title: 'Marathon de Casablanca',
    category: 'Événement Sportif',
    link: '/sports'
  },
  {
    id: 4,
    image: '/images/banner/4.png',
    alt: 'Rimel Challenge 5ème Édition - Partenaire Officiel Lens Production',
    title: 'Rimel Challenge 5ème Édition',
    category: 'Partenaire Officiel',
    link: '/sports'
  },
  {
    id: 5,
    image: '/images/banner/5.png',
    alt: 'Réservez Vos Dates 2027 - Mariages & Célébrations Lens Production',
    title: 'Réservez Vos Dates 2027',
    category: 'Saison des Mariages',
    link: '/weddings'
  },
  {
    id: 6,
    image: '/images/banner/6.png',
    alt: 'Cairo Marathon 2027 - Lens Production Media Coverage',
    title: 'Cairo Marathon 2027',
    category: 'Marathon International',
    link: '/sports'
  }
];

const AUTOPLAY_INTERVAL = 5500; // 5.5s per slide

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = bannerSlides[currentIndex];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.02,
      x: dir > 0 ? 40 : -40
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1] as const
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? -40 : 40,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1] as const
      }
    })
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#DC2626]/20 text-[#DC2626] border border-[#DC2626]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse"></span>
              À LA UNE
            </span>
            <span className="text-sm text-gray-400">
              Événements, Couvertures &amp; Réservations
            </span>
          </div>

          {/* Slide counter & pause indicator */}
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {String(bannerSlides.length).padStart(2, '0')}
            </span>
            {isPaused && (
              <span className="px-2 py-0.5 rounded bg-white/10 text-white/70 text-[10px]">
                PAUSED
              </span>
            )}
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/80"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20 rounded-2xl sm:rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000 -z-10 pointer-events-none"></div>

          {/* Aspect Ratio Box (1920x900 ~ 2.133:1) */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[1920/900] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Link
                  href={currentSlide.link}
                  className="block relative w-full h-full cursor-pointer group/link"
                  aria-label={currentSlide.title}
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    fill
                    priority={currentIndex === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                    className="object-cover object-center transition-transform duration-700 group-hover/link:scale-[1.01]"
                  />

                  {/* Subtle edge vignette to blend seamlessly with dark background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#DC2626] border border-white/20 hover:border-[#DC2626] backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg hover:scale-110 active:scale-95"
              aria-label="Diapositive précédente"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#DC2626] border border-white/20 hover:border-[#DC2626] backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg hover:scale-110 active:scale-95"
              aria-label="Diapositive suivante"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Progress Bar (Autoplay timer) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? undefined : '100%' }}
                transition={{
                  duration: isPaused ? 0 : AUTOPLAY_INTERVAL / 1000,
                  ease: 'linear'
                }}
                className="h-full bg-[#DC2626]"
              />
            </div>
          </div>

          {/* Bottom Bar: Indicators & Quick Link */}
          <div className="px-4 sm:px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Slide title / Category */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#DC2626]">
                {currentSlide.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-sm font-medium text-white/90 truncate max-w-[280px] sm:max-w-md">
                {currentSlide.title}
              </span>
            </div>

            {/* Interactive Pagination Dots */}
            <div className="flex items-center gap-2">
              {bannerSlides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    aria-label={`Aller à la diapositive ${index + 1}`}
                    className={`group relative h-2.5 transition-all duration-300 rounded-full ${
                      isActive ? 'w-8 bg-[#DC2626]' : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  >
                    <span className="sr-only">{slide.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Action CTA Link */}
            <Link
              href={currentSlide.link}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#DC2626] transition-colors"
            >
              En savoir plus
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Access Portfolios Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          <Link
            href="/weddings"
            className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#DC2626]/50 transition-all text-center"
          >
            <div className="text-xs text-gray-400 group-hover:text-[#DC2626] uppercase tracking-wider mb-1">
              Photographie &amp; Vidéo
            </div>
            <div className="font-semibold text-white group-hover:text-white flex items-center justify-center gap-1.5 text-sm sm:text-base">
              Mariages
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>

          <Link
            href="/sports"
            className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#DC2626]/50 transition-all text-center"
          >
            <div className="text-xs text-gray-400 group-hover:text-[#DC2626] uppercase tracking-wider mb-1">
              Marathons &amp; Trails
            </div>
            <div className="font-semibold text-white group-hover:text-white flex items-center justify-center gap-1.5 text-sm sm:text-base">
              Sports
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>

          <Link
            href="/corporate"
            className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#DC2626]/50 transition-all text-center"
          >
            <div className="text-xs text-gray-400 group-hover:text-[#DC2626] uppercase tracking-wider mb-1">
              Entreprises &amp; Marques
            </div>
            <div className="font-semibold text-white group-hover:text-white flex items-center justify-center gap-1.5 text-sm sm:text-base">
              Corporate
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>

          <a
            href="#showreel"
            className="group p-4 rounded-xl bg-[#DC2626]/20 hover:bg-[#DC2626]/30 border border-[#DC2626]/40 hover:border-[#DC2626] transition-all text-center"
          >
            <div className="text-xs text-red-400 uppercase tracking-wider mb-1">
              Production 2026
            </div>
            <div className="font-semibold text-white flex items-center justify-center gap-1.5 text-sm sm:text-base">
              Showreel
              <span className="group-hover:translate-x-0.5 transition-transform">▶</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
