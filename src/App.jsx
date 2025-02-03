<<<<<<< HEAD
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> bc06eb7 (Reinitialize repository)
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
<<<<<<< HEAD
=======
import ServiceDetails from "./pages/ServiceDetails";
import ContactForm from "./components/ContactForm";
>>>>>>> bc06eb7 (Reinitialize repository)

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
<<<<<<< HEAD
      <Header />
        <Hero />
       <Benefits />
        <Collaboration />
        <Services />
     
        <Roadmap />
        <Footer />
      </div>

=======
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Roadmap />
                <ContactForm />
              </>
            }
          />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
        <Footer />
      </div>
>>>>>>> bc06eb7 (Reinitialize repository)
      <ButtonGradient />
    </>
  );
};

export default App;
