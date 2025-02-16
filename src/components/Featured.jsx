import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import Heading from './Heading';
import { benefits } from '../constants';
import { podcast, werun, stroyteller, anniversary } from '../assets';

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const featuredWorks = [
    {
      title: "anniversaire 10 ans",
      subtitle: "Wedding Films",
      image: anniversary,
      category: "wedding"
    },
    {
      title: " WERUN challenge",
      subtitle: "Evenement Sportif",
      image: werun,
      category: "Evenement"
    },
    {
      title: "Podcast",
      subtitle: "Podcast",
      image: podcast,
      category: "Podcast"
    },
    {
      title: "Storyteller",
      subtitle: "Storyteller",
      image: stroyteller,
      category: "Storyteller"
    },
    {
      title: "tets",
      subtitle: "Production Documentaire",
      image: "/featured/documentary1.jpg",
      category: "documentary"
    },
    {
      title: "Campagne Orange Summer",
      subtitle: "Production Publicitaire",
      image: "/featured/ad1.jpg",
      category: "advertising"
    },
    {
      title: "Festival International de Carthage",
      subtitle: "Couverture Événementielle",
      image: "/featured/event1.jpg",
      category: "event"
    },
    {
      title: "video robe de mariages",
      subtitle: "Mode & Beauté",
      image: "/featured/fashion1.jpg",
      category: "fashion"
    },
    {
      title: "Bizerta",
      subtitle: "Marketing Digital",
      image: "/featured/product1.jpg",
      category: "product"
    },
    {
      title: "video de mariage",
      subtitle: "Wedding Films",
      image: "/featured/live1.jpg",
      category: "live"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === featuredWorks.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredWorks.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredWorks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredWorks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    setIsAutoPlaying(true);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <Section id="featured" className="overflow-hidden !py-10">
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-2xl mb-10"
          title="À la Une"
          text="Découvrez nos dernières réalisations et projets exceptionnels"
        />

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full"
                onClick={() => handleImageClick(featuredWorks[currentIndex].image)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 to-transparent z-1" />
                <div className="relative w-full h-full">
                  <img
                    src={featuredWorks[currentIndex].image}
                    alt={featuredWorks[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 z-2 bg-gradient-to-t from-n-8/90 to-transparent pt-20">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="h3 text-n-1 mb-2 text-lg md:text-2xl lg:text-3xl"
                  >
                    {featuredWorks[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-n-3 text-sm md:text-base"
                  >
                    {featuredWorks[currentIndex].subtitle}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Hidden on Mobile */}
            <button
              onClick={handlePrevious}
              className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-n-8/50 text-n-1 hover:bg-n-8/80 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-n-8/50 text-n-1 hover:bg-n-8/80 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {featuredWorks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-n-1 w-4' 
                      : 'bg-n-1/50 hover:bg-n-1/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails Preview - Scrollable on Mobile */}
          <div className="flex gap-2 md:gap-4 mt-4 overflow-x-auto pb-4 scrollbar-hidden">
            {featuredWorks.map((work, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative flex-shrink-0 w-28 md:w-40 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-2 ring-color-1 scale-105' : ''
                }`}
                style={{ aspectRatio: '16/9' }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className={`absolute inset-0 bg-n-8/50 transition-opacity ${
                    index === currentIndex ? 'opacity-0' : 'opacity-70'
                  }`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-1 md:p-2 z-2 bg-gradient-to-t from-n-8/90 to-transparent">
                  <p className="text-xs text-n-1 truncate">{work.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Fullscreen Image View */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-n-8/90 backdrop-blur-sm"
              onClick={closeFullscreen}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full h-full md:w-auto md:h-auto md:max-w-[90vw] md:max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Full size"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={closeFullscreen}
                  className="absolute top-4 right-4 p-2 rounded-full bg-n-8/50 text-n-1 hover:bg-n-8/80 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Featured;