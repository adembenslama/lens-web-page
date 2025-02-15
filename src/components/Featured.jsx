import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import Heading from './Heading';
import { benefits } from '../constants';

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredWorks = [
    {
      title: "Mariage",
      subtitle: "Wedding Films",
      image: "/featured/wedding1.jpg",
      category: "wedding"
    },
    {
      title: " SOIB",
      subtitle: "Événement Corporate",
      image: "/featured/corporate1.jpg",
      category: "corporate"
    },
    {
      title: "Keune",
      subtitle: "Production Commerciale",
      image: "/featured/commercial1.jpg",
      category: "commercial"
    },
    {
      title: "Marathon",
      subtitle: "Événement Sportif",
      image: "/featured/sport1.jpg",
      category: "sport"
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
      }, 3000); // Change slide every 5 seconds
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
          <div className="relative h-[70vh] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-n-8 to-transparent z-1" />
                <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-700">
                  <img
                    src={featuredWorks[currentIndex].image}
                    alt={featuredWorks[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover object-center transform scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 z-2 bg-gradient-to-t from-n-8/90 to-transparent pt-20">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="h3 text-n-1 mb-2"
                  >
                    {featuredWorks[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-n-3"
                  >
                    {featuredWorks[currentIndex].subtitle}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-n-8/50 text-n-1 hover:bg-n-8/80 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-n-8/50 text-n-1 hover:bg-n-8/80 transition-colors"
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

          {/* Thumbnails Preview */}
          <div className="flex gap-4 mt-4 overflow-x-auto pb-4 scrollbar-hidden">
            {featuredWorks.map((work, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden transition-all transform hover:scale-105 ${
                  index === currentIndex ? 'ring-2 ring-color-1 scale-105' : ''
                }`}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transform scale-110"
                  />
                  <div className={`absolute inset-0 bg-n-8/50 transition-opacity ${
                    index === currentIndex ? 'opacity-0' : 'opacity-70'
                  }`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 z-2 bg-gradient-to-t from-n-8/90 to-transparent">
                  <p className="text-xs text-n-1 truncate">{work.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Featured; 