import { useParams } from 'react-router-dom';
import { benefits } from '../constants';
import Section from '../components/Section';
import Button from '../components/Button';
import { check } from '../assets';
import ServiceHeader from '../components/ServiceHeader';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = benefits.find((benefit) => benefit.id === id);

  if (!service) {
    return (
      <>
        <ServiceHeader />
        <Section className="text-center">
          <h2 className="h2">Service not found</h2>
          <Button href="/" className="mt-8">
            Return to Home
          </Button>
        </Section>
      </>
    );
  }

  return (
    <>
      <ServiceHeader />
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container">
          <div className="relative z-1 max-w-[62rem] mx-auto mb-[4rem]">
            <h1 className="h1 mb-6">{service.title}</h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2">
              {service.text}
            </p>
          </div>

          <div className="relative z-1 grid gap-10 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={service.videoUrl}
                controls
                autoPlay
                muted
                loop
              />
            </div>

            <div className="relative p-8 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
              <div className="relative z-1">
                <h4 className="h4 mb-8">Caractéristiques</h4>
                <ul className="max-w-[22rem]">
                  {service.features?.map((feature, index) => (
                    <li className="mb-3 py-3" key={index}>
                      <div className="flex items-center">
                        <img src={check} width={24} height={24} alt="check" />
                        <h6 className="body-2 ml-5">{feature}</h6>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <h4 className="h4 mb-8">Outils Utilisés</h4>
                  <div className="flex flex-wrap gap-4">
                    {service.tools?.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center px-4 py-2 bg-n-7 rounded-lg"
                      >
                        <img
                          src={tool.icon}
                          width={24}
                          height={24}
                          alt={tool.name}
                          className="mr-2"
                        />
                        <span className="text-n-1">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="mt-12" href="#contact">
                  Demander un Devis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServiceDetails; 