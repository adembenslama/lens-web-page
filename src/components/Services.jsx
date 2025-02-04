import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Nos Services Professionnels"
          text="Des solutions audiovisuelles sur mesure pour tous vos besoins"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Production Vidéo"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Production Vidéo</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Une expertise complète en production audiovisuelle professionnelle
              </p>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">Films d'entreprise</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">Vidéos promotionnelles</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">Captation d'événements</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">Montage professionnel</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Photographie"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photographie</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Services photo professionnels pour tous vos projets : événements, portraits, produits
                </p>
                <ul className="body-2 text-n-3">
                  <li className="flex items-center mb-3">
                    <img width={20} height={20} src={check} className="mr-3" />
                    Photos d'événements
                  </li>
                  <li className="flex items-center mb-3">
                    <img width={20} height={20} src={check} className="mr-3" />
                    Portraits professionnels
                  </li>
                  <li className="flex items-center">
                    <img width={20} height={20} src={check} className="mr-3" />
                    Photos de produits
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Services Spécialisés</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Des services sur mesure pour répondre à vos besoins spécifiques
                </p>

                <ul className="grid gap-5">
                  <li className="flex items-center p-4 bg-n-6 rounded-xl">
                    <div className="flex items-center justify-center w-10 h-10 bg-n-5 rounded-xl mr-4">
                      <img src={service3} width={24} height={24} alt="Drone" />
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Prises de vue aériennes</h6>
                      <p className="text-n-3 text-sm">Captation par drone professionnel</p>
                    </div>
                  </li>
                  <li className="flex items-center p-4 bg-n-6 rounded-xl">
                    <div className="flex items-center justify-center w-10 h-10 bg-n-5 rounded-xl mr-4">
                      <img src={service3} width={24} height={24} alt="Live" />
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Streaming en direct</h6>
                      <p className="text-n-3 text-sm">Diffusion live d'événements</p>
                    </div>
                  </li>
                  <li className="flex items-center p-4 bg-n-6 rounded-xl">
                    <div className="flex items-center justify-center w-10 h-10 bg-n-5 rounded-xl mr-4">
                      <img src={service3} width={24} height={24} alt="Motion" />
                    </div>
                    <div>
                      <h6 className="text-n-1 font-semibold mb-1">Motion Design</h6>
                      <p className="text-n-3 text-sm">Animation et effets visuels</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
