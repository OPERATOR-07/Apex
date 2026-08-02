import './ServicesList.css';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Clinic Consultations', desc: 'Comprehensive medical consultations and personalized treatment plans.' },
  { title: 'Home & Hotel Medical Visits', desc: 'Professional medical care delivered wherever you are.' },
  { title: 'IV Therapy at Home', desc: 'Intravenous therapy administered in the comfort of your home.' },
  { title: 'MRI/CT/ECHO/Ultrasound/X-ray', desc: 'Coordinated appointments with trusted imaging centres.' },
  { title: 'Laboratory Tests', desc: 'Seamless coordination with diagnostic laboratories.' },
  { title: 'Doctor on Call / Tele-consultation', desc: 'Virtual medical consultations from anywhere.' },
  { title: 'Pharmacy / Prescription Delivery', desc: 'Medication delivered to your doorstep.' },
  { title: 'Physiotherapy at Home', desc: 'Professional physiotherapy in your own environment.' },
  { title: 'Preventive Healthcare', desc: 'Health screenings, wellness advice, and early disease detection.' },
  { title: 'Chronic Disease Management', desc: 'Long-term care for hypertension, diabetes, asthma, and more.' },
  { title: 'Home Nursing Services', desc: 'Professional nursing care in the comfort of your home.' },
  { title: 'Diagnostic Coordination', desc: 'Blood sample collection and lab coordination.' },
  { title: 'Specialist Referrals', desc: 'Access to experienced specialists and leading hospitals.' },
  { title: 'Corporate Healthcare', desc: 'Tailored healthcare solutions for businesses and organizations.' },
];

export default function ServicesList() {
  return (
    <section className="services-list">
      <div className="services-list-inner">
        <div className="services-list-header">
          <Reveal>
            <span className="services-badge">WHAT WE OFFER</span>
          </Reveal>
          <Reveal delay={80}>
            <h2>Our Services</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="services-subtitle">
              From routine consultations to specialized care — we cover every aspect of your health.
            </p>
          </Reveal>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal delay={(i % 2) * 120 + Math.floor(i / 2) * 60} key={i}>
              <div className="service-item">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c5cb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div className="service-item-content">
                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-desc">{service.desc}</p>
                </div>
                <Link to="/reach-us" className="btn-enquire">Enquire Now</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
