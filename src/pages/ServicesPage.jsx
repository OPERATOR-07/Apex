import './PageHero.css';
import { HospitalIcon, MicroscopeIcon, HomeIcon, PillIcon, BuildingIcon, PhoneIcon, WhatsAppIcon, MailIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';

const serviceGroups = [
  {
    title: 'Clinical & Consultation Services',
    icon: HospitalIcon,
    items: [
      { name: 'Clinic Consultations', desc: 'Comprehensive medical consultations with experienced physicians. Our clinic provides thorough assessments, diagnosis, and personalized treatment plans tailored to your specific health needs.' },
      { name: 'Home & Hotel Medical Visits', desc: 'Professional medical care delivered wherever you are. Our doctors and nurses come to your home or hotel in Zanzibar, bringing clinical expertise to your doorstep.' },
      { name: 'Doctor on Call / Tele-consultation', desc: 'Virtual medical consultations from anywhere. Speak with a licensed physician via phone or video call for medical advice, prescriptions, and follow-up care.' },
    ],
  },
  {
    title: 'Diagnostic & Imaging Services',
    icon: MicroscopeIcon,
    items: [
      { name: 'MRI/CT/ECHO/Ultrasound/X-ray Appointments', desc: 'Coordinated scheduling with leading imaging centres across Zanzibar. We handle referrals, bookings, and results delivery so you get the answers you need without the hassle.' },
      { name: 'Laboratory Tests', desc: 'Full-service diagnostic coordination including blood tests, urine analysis, and specialized lab work. Samples can be collected at our clinic or in the comfort of your home.' },
      { name: 'Diagnostic Coordination', desc: 'We manage the entire diagnostic journey — from sample collection to result delivery. Our team ensures seamless communication between labs, imaging centres, and your physician.' },
    ],
  },
  {
    title: 'Home-Based & Nursing Care',
    icon: HomeIcon,
    items: [
      { name: 'IV Therapy at Home', desc: 'Intravenous therapy administered by trained medical professionals in the comfort of your home. Includes hydration therapy, vitamin infusions, and medication administration.' },
      { name: 'Home Nursing Services', desc: 'Professional nursing care tailored to your needs — post-surgical care, chronic condition management, wound care, and elderly care, all in your familiar surroundings.' },
      { name: 'Physiotherapy at Home', desc: 'Expert physiotherapy sessions delivered in your home environment. Our physiotherapists develop personalized rehabilitation programs to restore mobility and improve quality of life.' },
    ],
  },
  {
    title: 'Pharmacy & Wellness Services',
    icon: PillIcon,
    items: [
      { name: 'Pharmacy / Prescription Delivery', desc: 'Medication delivered straight to your door. We coordinate with trusted pharmacies across Zanzibar to ensure you receive your prescribed medications promptly and safely.' },
      { name: 'Preventive Healthcare', desc: 'Proactive health management through regular screenings, wellness check-ups, vaccination programs, and early disease detection. Stay ahead of your health goals.' },
      { name: 'Chronic Disease Management', desc: 'Long-term care for conditions such as hypertension, diabetes, asthma, and heart disease. Our team provides ongoing monitoring, medication management, and lifestyle guidance.' },
    ],
  },
  {
    title: 'Specialized & Corporate Services',
    icon: BuildingIcon,
    items: [
      { name: 'Specialist Referrals', desc: 'Access to a curated network of experienced specialists and leading healthcare facilities. We coordinate every step of your specialist journey, from referral to follow-up.' },
      { name: 'Corporate Healthcare', desc: 'Tailored healthcare solutions for businesses, hotels, resorts, and institutions. Includes on-site medical services, employee health programs, and emergency medical planning.' },
    ],
  },
];

const steps = [
  { num: '1', title: 'Reach Out', text: 'Call, WhatsApp, or book online. Our team responds within minutes.' },
  { num: '2', title: 'Get Assessed', text: 'We understand your needs and match you with the right care.' },
  { num: '3', title: 'Receive Care', text: 'At our clinic, your home, your hotel, or via tele-consultation.' },
  { num: '4', title: 'Follow Up', text: 'We stay with you throughout your recovery and ongoing health journey.' },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <Reveal className="page-hero-content" direction="left">
            <span className="page-hero-badge">OUR SERVICES</span>
            <h1 className="page-hero-title">Comprehensive Care, <br/>Built Around You</h1>
            <p className="page-hero-text">
              From routine consultations to specialized medical care, we offer a full spectrum of
              healthcare services designed to meet every need. Whether you're at home, at a hotel,
              or visiting our clinic — quality care is always within reach.
            </p>
          </Reveal>
          <Reveal className="page-hero-image-col" direction="right" delay={150}>
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.16.jpeg"
              alt="Apex Healthcare services"
              className="page-hero-image"
            />
          </Reveal>
        </div>
      </section>

      {/* Service Groups */}
      {serviceGroups.map((group, gi) => {
        const Icon = group.icon;
        return (
          <section
            className={`page-content-section ${gi % 2 === 1 ? 'page-content-section--alt' : ''}`}
            key={gi}
          >
            <div className="page-content-inner">
              <Reveal className="service-group-header">
                <span className="service-group-icon">
                  <Icon size={32} color="#7b1315" />
                </span>
                <h2>{group.title}</h2>
              </Reveal>
              <div className="service-detail-grid">
                {group.items.map((item, ii) => (
                  <Reveal delay={ii * 120} key={ii}>
                    <div className="service-detail-card">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Process overview */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <Reveal className="page-content-center">
            <span className="page-badge-2">HOW IT WORKS</span>
            <h2>Your Journey with Apex</h2>
            <p className="page-lead">Getting the care you need is simple and stress-free.</p>
          </Reveal>
          <div className="page-steps">
            {steps.map((step, i) => (
              <Reveal delay={i * 140} className="page-step-row" key={i}>
                {i > 0 && <div className="page-step-arrow">→</div>}
                <div className="page-step">
                  <div className="page-step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta" style={{background: 'linear-gradient(135deg, #7b1315 0%, #ee2b36 100%)'}}>
        <div className="page-cta-inner">
          <Reveal direction="zoom">
            <h2>Need a Service Not Listed Here?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Contact us — we'll find the right healthcare solution for you.</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="page-cta-actions">
              <Link to="/reach-us" className="btn-hero btn-hero-primary">Get in Touch</Link>
              <a href="https://wa.me/255705239600" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-secondary">
                <span className="btn-icon-inline"><WhatsAppIcon size={18} /></span> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
