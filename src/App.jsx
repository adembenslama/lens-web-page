import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetails from "./pages/ServiceDetails";
import WeddingService from "./pages/WeddingService";
import ContactForm from "./components/ContactForm";
import Team from "./components/Team";
import Featured from "./components/Featured";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Featured />
                <Benefits />
                <Collaboration />
                <Services />
                <Team />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route 
            path="/service/3" 
            element={
              <>
                <WeddingService />
                <ContactForm />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/service/:id" 
            element={
              <>
                <ServiceDetails />
                <ContactForm />
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
