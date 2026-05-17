'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function SportsPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const sportsEvents = [
    {
      id: 0,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/mara/C0095_1_5.mp4',
      title: 'Hippo Diarrhytus Run',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'A large-scale semi-marathon held in Bizerte, gathering thousands of runners for a 21 km race and promoting sport and tourism.',
      contribution: 'Provided full media coverage including commercial video production, event filming, and creation of dynamic social media content.',
      location: 'Bizerte, Tunisia',
      distance: '21 km',
      participants: '2000+ runners',
      tags: ['Marathon', 'Tourism', 'Community']
    },
    {
      id: 1,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/mara/ltf.mp4',
      title: 'Laaroussia Trail Festival',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'A challenging 24-hour Everest challenge trail running event set in natural landscapes, bringing together athletes for an ultimate endurance test.',
      contribution: 'Handled photo and video production to promote the event, capturing key moments and creating engaging content for marketing and social media.',
      location: 'Laaroussia, Manouba',
      distance: '24 Hours Everest Challenge',
      participants: '2000+ athletes',
      tags: ['24H Challenge', 'Everest', 'Endurance']
    },
    {
      id: 2,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/mara/C0095_1_5_1.mp4',
      title: 'Ultra Trail Gazelles Sahara',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'A challenging 100km desert ultra-trail running event held in the Tunisian Sahara, attracting international and local athletes for an extreme endurance challenge.',
      contribution: 'Provided full photo and video production to promote the event, capturing the race atmosphere, athletes in action, and the desert environment for marketing and social media content.',
      location: 'Tozeur, Tunisia',
      distance: '100 km Ultra Trail',
      participants: '300+ international athletes',
      tags: ['100km Ultra', 'Desert', 'International']
    },
    {
      id: 3,
      url: 'https://storage.googleapis.com/forfaitmariage.tn/lens/mara/test.mp4',
      title: 'Rimel Challenge',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
        </svg>
      ),
      description: 'A challenging 50km trail running event held in Rimel, Bizerte. We have covered 4 editions of this exciting trail competition, showcasing the growth and competitive spirit.',
      contribution: 'Comprehensive coverage across 4 editions of the event, documenting its growth and capturing the competitive spirit of participants.',
      location: 'Rimel, Bizerte',
      distance: '50 km Trail',
      participants: '3000+ competitors',
      tags: ['50km Trail', 'Bizerte', '4 Editions']
    },
    {
      id: 4,
      url: '/clients/ASMD_Media_Team.png',
      title: 'ASMD Football Club Media',
      subtitle: 'الكوكب الرياضي بمنزل جميل',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      description: 'Professional media coverage for ASMD Football Club (الكوكب الرياضي بمنزل جميل), providing comprehensive documentation of matches, training sessions, and club activities.',
      contribution: 'Ongoing media partnership providing match coverage, player profiles, training documentation, and social media content for the football club.',
      location: 'Menzel Jemil, Tunisia',
      distance: 'Football matches',
      participants: 'Team & supporters',
      tags: ['Football', 'Club Media', 'Sports Coverage'],
      isImage: true
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Athletic Excellence Coverage
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="rgb-split-active">Sports</span> Events Coverage
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Capturing the energy, passion, and triumph of athletic events across Tunisia. From marathons to ultra-trails, we document every moment of sporting excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#DC2626] mb-2">20+</div>
                <div className="text-gray-400">Sports Events</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#DC2626] mb-2">10,000+</div>
                <div className="text-gray-400">Athletes Captured</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#DC2626] mb-2">150+</div>
                <div className="text-gray-400">Hours of Footage</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Events Gallery */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {sportsEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Video Player or Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                  onClick={() => !event.isImage && handleVideoClick(event.id)}
                >
                  {event.isImage ? (
                    <Image
                      src={event.url}
                      alt={event.title}
                      fill
                      className="object-contain bg-white/5"
                    />
                  ) : (
                    <video
                      src={event.url}
                      className="w-full h-full object-cover"
                      controls={playingVideo === event.id}
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                  
                  {/* Overlay - Only show when not playing or for images */}
                  {(event.isImage || playingVideo !== event.id) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-80 transition-opacity duration-300">
                      {!event.isImage && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-[#DC2626] rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform shadow-2xl shadow-red-600/50">
                            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Event Tags */}
                      <div className="absolute top-6 left-6 right-6">
                        <div className="flex gap-2 flex-wrap">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[#DC2626]/20 backdrop-blur-sm border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Event Info Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        {event.subtitle && (
                          <p className="text-lg text-gray-300 mb-2">{event.subtitle}</p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {event.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                            {event.participants}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Event Details */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-[#DC2626]">{event.icon}</div>
                      <div>
                        <h2 className="text-4xl sm:text-5xl font-bold">{event.title}</h2>
                        {event.subtitle && (
                          <p className="text-xl text-gray-400 mt-2">{event.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                      {event.description}
                    </p>

                    {/* Event Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-[#DC2626] mb-1">{event.distance}</div>
                        <div className="text-sm text-gray-400">Distance</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-[#DC2626] mb-1">{event.participants}</div>
                        <div className="text-sm text-gray-400">Participants</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-[#DC2626] mb-1 flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-400">{event.location}</div>
                      </div>
                    </div>

                    {/* Our Contribution */}
                    <div className="bg-gradient-to-r from-[#DC2626]/10 to-transparent border-l-4 border-[#DC2626] pl-6 py-4 rounded-r-2xl">
                      <h3 className="text-lg font-bold text-[#DC2626] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Our Contribution
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {event.contribution}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#DC2626]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Sports <span className="rgb-split-active">Coverage Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive media coverage for all types of sporting events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Event Filming',
                description: 'Professional video coverage capturing every moment of your sporting event from multiple angles.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Action Photography',
                description: 'High-speed photography capturing athletes in motion with perfect timing and composition.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2m-5 3v6m2-3h.01" />
                  </svg>
                ),
                title: 'Commercial Videos',
                description: 'Promotional videos for event marketing, sponsor content, and social media campaigns.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Social Media Content',
                description: 'Engaging content optimized for social platforms to maximize event reach and engagement.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Award Ceremonies',
                description: 'Complete coverage of victory moments, medal presentations, and celebration highlights.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Live Streaming',
                description: 'Real-time broadcast solutions for events, bringing the action to remote audiences.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-[#DC2626]/30">
                  <div className="text-[#DC2626] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#DC2626] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
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
              Ready to Capture Your <span className="rgb-split-active">Sporting Event?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let us document your athletic event with professional excellence and creative vision
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
            &copy; 2026 Lens Production. All rights reserved. Sports coverage across Tunisia.
          </p>
        </div>
      </footer>
    </div>
  );
}