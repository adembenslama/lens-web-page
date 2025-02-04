import { useEffect } from 'react';
import { benefits } from '../constants';
import Section from '../components/Section';
import Button from '../components/Button';
import { check, instagram, facebook } from '../assets';
import ServiceHeader from '../components/ServiceHeader';
import { motion } from 'framer-motion';

const WeddingService = () => {
  const service = benefits.find((benefit) => benefit.id === "3"); // Wedding Films

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const socialStats = [
    {
      platform: "Instagram",
      followers: "56K",
      icon: instagram,
      link: "https://instagram.com/your-handle"
    },
    {
      platform: "Facebook",
      followers: "120K",
      icon: facebook,
      link: "https://facebook.com/your-page"
    }
  ];

  const weddingGallery = [
    "/wedding/image1.jpg",
    "/wedding/image2.jpg",
    "/wedding/image3.jpg",
    "/wedding/image4.jpg",
    "/wedding/image5.jpg",
    "/wedding/image6.jpg"
  ];

  return (
    <>
      <ServiceHeader />
      <div className="pt-[12rem] -mt-[5.25rem]">
        {/* Hero Section */}
        <Section className="overflow-hidden">
          <motion.div 
            className="container relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-1 max-w-[62rem] mx-auto mb-[4rem] text-center">
              <motion.h1 
                className="h1 mb-6"
                {...fadeInUp}
              >
                {service.title}
              </motion.h1>
              <motion.p 
                className="body-1 max-w-3xl mx-auto mb-6 text-n-2"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                {service.text}
              </motion.p>
            </div>

            {/* Social Proof */}
            <motion.div 
              className="flex justify-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {socialStats.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-n-8 rounded-2xl border border-n-6 hover:border-n-1/10 transition-colors"
                >
                  <img 
                    src={social.icon} 
                    alt={social.platform} 
                    className="w-8 h-8 mr-4"
                  />
                  <div>
                    <h3 className="h4 mb-1">{social.followers}</h3>
                    <p className="text-n-4">{social.platform} Followers</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Main Video */}
            <motion.div 
              className="relative aspect-video rounded-3xl overflow-hidden mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={service.videoUrl}
                controls
                autoPlay
                muted
                loop
              />
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-10 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative p-8 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
                <div className="relative z-1">
                  <h4 className="h4 mb-8">Notre Expertise</h4>
                  <ul className="max-w-[22rem]">
                    {service.features?.map((feature, index) => (
                      <motion.li 
                        className="mb-3 py-3" 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="flex items-center">
                          <img src={check} width={24} height={24} alt="check" />
                          <h6 className="body-2 ml-5">{feature}</h6>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative p-8 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
                <div className="relative z-1">
                  <h4 className="h4 mb-8">Notre Approche</h4>
                  <p className="body-2 mb-10 text-n-4">
                    Avec plus de 10 ans d'expérience dans la capture des moments les plus précieux, 
                    nous avons développé une approche unique qui combine l'élégance du cinéma avec 
                    l'authenticité de vos émotions.
                  </p>
                  <Button className="w-full" href="#contact">
                    Réserver une Consultation
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Gallery */}
            <div className="mb-16">
              <motion.h2 
                className="h3 text-center mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Galerie de Nos Mariages
              </motion.h2>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {weddingGallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <img
                      src={image}
                      alt={`Wedding ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <h2 className="h3 mb-4">Prêt à Créer Votre Histoire d'Amour?</h2>
              <p className="body-2 mb-8 text-n-4">
                Laissez-nous transformer vos moments précieux en souvenirs intemporels.
              </p>
              <Button href="#contact">
                Commencer Votre Projet
              </Button>
            </motion.div>
          </motion.div>
        </Section>
      </div>
    </>
  );
};

export default WeddingService; 