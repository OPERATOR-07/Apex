import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Healthcare You Can Trust</span>
          <h1 className="hero-title">
            <span className="hero-title-highlight">Comprehensive Care,</span>
            <br />
            Built Around You.
          </h1>
          <p className="hero-text">
            Apex Healthcare is a hotel and home medical service of <strong>ISLAND CLINIC</strong>, delivering personalized
            medical care across Zanzibar. From clinic consultations and home visits to hotel medical
            services, telemedicine, and coordinated specialist care — we bring quality healthcare
            closer to you, wherever you need it.
          </p>
          <p className="hero-tagline">Your Trusted Healthcare Partner.</p>
          <div className="hero-actions">
            <Link to="/reach-us" className="btn-hero btn-hero-primary">Book an Appointment</Link>
            <Link to="/reach-us" className="btn-hero btn-hero-secondary">Request a Home Visit</Link>
          </div>
        </div>
        <div className="hero-image-col">
          <div className="hero-image-wrapper">
            <img
              src="/statics/hero_doctor_hotel.jpg"
              alt="Apex Healthcare — professional medical care"
              className="hero-image"
            />
            <div className="hero-image-card">
              <strong>24/7</strong>
              <span>Always Here For You</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
