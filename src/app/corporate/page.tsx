'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CorporatePage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const corporateProjects = [
    {
      id: 0,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/tee.mp4',
      title: 'OneTech Group ',
      client: 'OneTech Group',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Professional corporate video production for OneTech Group, showcasing their innovative technology solutions and business excellence.',
      services: ['Corporate Video', 'Brand Storytelling', 'Professional Editing', 'High-Quality Production'],
      year: '2024-2026',
      category: 'Technology'
    },
    {
      id: 1,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/te.mp4',
      title: 'OneTech Group',
      client: 'OneTech Group',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Comprehensive media coverage for OneTech Group, highlighting their technological innovations and corporate culture.',
      services: ['Corporate Coverage', 'Event Documentation', 'Promotional Content', 'Digital Marketing'],
      year: '2024-2026',
      category: 'Technology'
    },
    {
      id: 2,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/onetech.mp4',
      title: 'OneTech Group - Corporate',
      client: 'OneTech Group',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Full-scale corporate video production for OneTech Group, capturing their business operations and technological expertise.',
      services: ['Corporate Film', 'Brand Video', 'Company Profile', 'Professional Production'],
      year: '2024-2026',
      category: 'Technology'
    },
    {
      id: 3,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/orangegabes.mp4',
      title: 'Orange Tunisie - Yalla Jaw Tour',
      client: 'Orange Tunisie',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Multi-location video production for Orange Tunisie\'s "Yalla Jaw" tour in Gabes. Comprehensive coverage across 3+ locations showcasing Orange\'s community engagement and brand presence.',
      services: ['Multi-Location Filming', 'Event Coverage', 'Brand Activation', 'Social Media Content'],
      year: '2024-2026',
      category: 'Telecommunications',
      locations: '3+ Locations'
    },
    {
      id: 4,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/medicate.mp4',
      title: 'Medicate International',
      client: 'Medicate Factory',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Professional factory tour and corporate video for Medicate International, showcasing their pharmaceutical manufacturing facilities and quality standards.',
      services: ['Factory Tour Video', 'Industrial Documentation', 'Corporate Profile', 'Quality Showcase'],
      year: '2024-2026',
      category: 'Pharmaceutical'
    }
  ];

  const handleVideoClick = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white film-grain scanlines">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold text-white cursor-pointer rgb-split-active">
              LENS
            </Link>
            <Link 
              href="/"
              className="px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium cursor-pointer hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-6 px-6 py-2 bg-[#DC2626]/10 backdrop-blur-sm border border-[#DC2626]/20 rounded-full text-sm font-medium"
            >
              <span className="text-[#DC2626] flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Corporate Excellence
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="rgb-split-active">Corporate</span> Video Production
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Professional corporate video production for leading brands in Tunisia. From factory tours to brand activations, we deliver high-quality content that elevates your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#DC2626] mb-2">50+</div>
                <div className="text-gray-400">Corporate Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#DC2626] mb-2">30+</div>
                <div className="text-gray-400">Leading Brands</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#DC2626] mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Projects Gallery */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {corporateProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Video Player */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                  onClick={() => handleVideoClick(project.id)}
                >
                  <video
                    src={project.url}
                    className="w-full h-full object-cover"
                    controls={playingVideo === project.id}
                    loop
                    playsInline
                    preload="metadata"
                  />
                  
                  {/* Overlay - Only show when not playing */}
                  {playingVideo !== project.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-80 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-[#DC2626] rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform shadow-2xl shadow-red-600/50">
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Project Info Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-[#DC2626]/20 backdrop-blur-sm border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-gray-300">Client: {project.client}</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Project Details */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-[#DC2626]">{project.icon}</div>
                      <div>
                        <h2 className="text-4xl sm:text-5xl font-bold">{project.title}</h2>
                        <p className="text-xl text-gray-400 mt-2">Client: {project.client}</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                        <div className="text-sm text-gray-400 mb-1">Category</div>
                        <div className="text-lg font-semibold text-white">{project.category}</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                        <div className="text-sm text-gray-400 mb-1">Year</div>
                        <div className="text-lg font-semibold text-white">{project.year}</div>
                      </div>
                      {project.locations && (
                        <div className="col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                          <div className="text-sm text-gray-400 mb-1">Coverage</div>
                          <div className="text-lg font-semibold text-white">{project.locations}</div>
                        </div>
                      )}
                    </div>

                    {/* Services
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-[#DC2626]/10 to-transparent border-l-2 border-[#DC2626] pl-4 py-3 rounded-r-xl">
                          <svg className="w-5 h-5 text-[#DC2626] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Elevate Your <span className="rgb-split-active">Brand?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let us create professional corporate content that showcases your business excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:benslamacommercial@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#DC2626] rounded-full text-white text-lg font-medium cursor-pointer shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Quote
              </motion.a>
              
              <motion.a
                href="tel:+21655708018"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full text-white text-lg font-medium cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Lens Production. All rights reserved. Corporate video production in Tunisia.
          </p>
        </div>
      </footer>
    </div>
  );
}
