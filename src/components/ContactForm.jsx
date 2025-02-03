import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:adembenslama2003@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0AService Interested In: ${formData.service}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" crosses>
      <div className="container">
        <Heading
          tag="Contactez Nous"
          title="Discutons de votre projet"
          text="Nous sommes là pour répondre à vos questions et vous accompagner dans votre projet."
        />
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="relative z-1 p-8 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
              <div className="relative z-1">
                <h4 className="h4 mb-8">Informations de Contact</h4>
                <div className="mb-8">
                  <p className="mb-2 text-n-1/50">Email:</p>
                  <a href="mailto:adembenslama2003@gmail.com" className="text-n-1 hover:text-color-1">
                    adembenslama2003@gmail.com
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-n-1/50">Téléphone:</p>
                  <a href="tel:+21655708018" className="text-n-1 hover:text-color-1">
                    +216 55 708 018
                  </a>
                </div>
              </div>

              <div className="relative z-1 mt-16">
                <h5 className="h5 mb-4">Heures de travail</h5>
                <div className="mb-4">
                  <p className="text-n-1/50">Lundi - Vendredi:</p>
                  <p className="text-n-1">9:00 - 18:00</p>
                </div>
                <div>
                  <p className="text-n-1/50">Samedi:</p>
                  <p className="text-n-1">10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form 
              onSubmit={handleSubmit}
              className="relative z-1 p-8 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-n-1/50">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7 border border-n-1/10 rounded-lg focus:outline-none focus:border-color-1"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-n-1/50">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7 border border-n-1/10 rounded-lg focus:outline-none focus:border-color-1"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-n-1/50">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7 border border-n-1/10 rounded-lg focus:outline-none focus:border-color-1"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-n-1/50">Entreprise</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7 border border-n-1/10 rounded-lg focus:outline-none focus:border-color-1"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-n-1/50">Service Souhaité</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-n-7 border border-n-1/10 rounded-lg focus:outline-none focus:border-color-1"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="events">Couverture Événements</option>
                    <option value="industrial">Productions Vidéos Industrielles</option>
                    <option value="sports">Événements Sportifs</option>
                    <option value="wedding">Wedding Films</option>
                    <option value="documentary">Documentaires</option>
                    <option value="graphics">Graphisme</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-n-1/50">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-n-7 border border-n-1/10 rounded-lg resize-none focus:outline-none focus:border-color-1"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
              </div>

              <Button className="mt-8 w-full md:w-auto" type="submit">
                Envoyer le Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm; 