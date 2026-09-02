import './AboutSection.css';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <Reveal direction="left" className="about-image-col">
          <img
            src="/statics/doctor_white_coat.jpg"
            alt="About Apex Healthcare"
            className="about-image"
          />
        </Reveal>
        <Reveal direction="right" className="about-content" delay={120}>
          <span className="about-badge">ABOUT US</span>
          <h2 className="about-heading">Who We Are</h2>
          <p className="about-text">
            Apex Healthcare is a Medical services of ISLAND CLINIC committed to delivering accessible,
            patient-centered medical services across <strong>Zanzibar</strong>. We combine clinical
            excellence with personalized care to provide a seamless healthcare experience — whether
            at our clinic, in your home, at your hotel, or through virtual consultations.
          </p>
          <p className="about-text">
            Our approach goes beyond treating illness — we coordinate your healthcare journey,
            connecting you with trusted specialists, diagnostic services, and hospitals whenever
            advanced care is needed.
          </p>
          <p className="about-text">
            At Apex, every patient receives the attention, professionalism, and compassion they
            deserve.
          </p>
          <Link to="/reach-us" className="btn-primary">Book an Appointment</Link>
        </Reveal>
      </div>
    </section>
  );
}
