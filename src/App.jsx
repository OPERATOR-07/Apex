import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import AboutSection from './components/AboutSection';
import ServicesList from './components/ServicesList';
import OurNetwork from './components/OurNetwork';
import WhyChooseUs from './components/WhyChooseUs';
import ReachUs from './components/ReachUs';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NetworksPage from './pages/NetworksPage';
import ReachUsPage from './pages/ReachUsPage';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <AboutSection />
      <ServicesList />
      <OurNetwork />
      <WhyChooseUs />
      <ReachUs />
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/our-networks" element={<NetworksPage />} />
        <Route path="/reach-us" element={<ReachUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
