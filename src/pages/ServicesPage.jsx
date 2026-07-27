import './PageHero.css';

const serviceGroups = [
  {
    title: 'Clinical & Consultation Services',
    icon: '🏥',
    items: [
      { name: 'Clinic Consultations', desc: 'Comprehensive medical consultations with experienced physicians. Our clinic provides thorough assessments, diagnosis, and personalized treatment plans tailored to your specific health needs.' },
      { name: 'Home & Hotel Medical Visits', desc: 'Professional medical care delivered wherever you are. Our doctors and nurses come to your home or hotel in Zanzibar, bringing clinical expertise to your doorstep.' },
      { name: 'Doctor on Call / Tele-consultation', desc: 'Virtual medical consultations from anywhere. Speak with a licensed physician via phone or video call for medical advice, prescriptions, and follow-up care.' },
    ],
  },
  {
    title: 'Diagnostic & Imaging Services',
    icon: '🔬',
    items: [
      { name: 'MRI/CT/ECHO/Ultrasound/X-ray Appointments', desc: 'Coordinated scheduling with leading imaging centres across Zanzibar. We handle referrals, bookings, and results delivery so you get the answers you need without the hassle.' },
      { name: 'Laboratory Tests', desc: 'Full-service diagnostic coordination including blood tests, urine analysis, and specialized lab work. Samples can be collected at our clinic or in the comfort of your home.' },
      { name: 'Diagnostic Coordination', desc: 'We manage the entire diagnostic journey — from sample collection to结果 delivery. Our team ensures seamless communication between labs, imaging centres, and your physician.' },
    ],
  },
  {
    title: 'Home-Based & Nursing Care',
    icon: '🏠',
    items: [
      { name: 'IV Therapy at Home', desc: 'Intravenous therapy administered by trained medical professionals in the comfort of your home. Includes hydration therapy, vitamin infusions, and medication administration.' },
      { name: 'Home Nursing Services', desc: 'Professional nursing care tailored to your needs — post-surgical care, chronic condition management, wound care, and elderly care, all in your familiar surroundings.' },
      { name: 'Physiotherapy at Home', desc: 'Expert physiotherapy sessions delivered in your home environment. Our physiotherapists develop personalized rehabilitation programs to restore mobility and improve quality of life.' },
    ],
  },
  {
    title: 'Pharmacy & Wellness Services',
    icon: '💊',
    items: [
      { name: 'Pharmacy / Prescription Delivery', desc: 'Medication delivered straight to your door. We coordinate with trusted pharmacies across Zanzibar to ensure you receive your prescribed medications promptly and safely.' },
      { name: 'Preventive Healthcare', desc: 'Proactive health management through regular screenings, wellness check-ups, vaccination programs, and early disease detection. Stay ahead of your health goals.' },
      { name: 'Chronic Disease Management', desc: 'Long-term care for conditions such as hypertension, diabetes, asthma, and heart disease. Our team provides ongoing monitoring, medication management, and lifestyle guidance.' },
    ],
  },
  {
    title: 'Specialized & Corporate Services',
    icon: '🏢',
    items: [
      { name: 'Specialist Referrals', desc: 'Access to a curated network of experienced specialists and leading healthcare facilities. We coordinate every step of your specialist journey, from referral to follow-up.' },
      { name: 'Corporate Healthcare', desc: 'Tailored healthcare solutions for businesses, hotels, resorts, and institutions. Includes on-site medical services, employee health programs, and emergency medical planning.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="page-hero-badge">OUR SERVICES</span>
            <h1 className="page-hero-title">Comprehensive Care, <br/>Built Around You</h1>
            <p className="page-hero-text">
              From routine consultations to specialized medical care, we offer a full spectrum of
              healthcare services designed to meet every need. Whether you're at home, at a hotel,
              or visiting our clinic — quality care is always within reach.
            </p>
          </div>
          <div className="page-hero-image-col">
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.16.jpeg"
              alt="Apex Healthcare services"
              className="page-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Service Groups */}
      {serviceGroups.map((group, gi) => (
        <section
          className={`page-content-section ${gi % 2 === 1 ? 'page-content-section--alt' : ''}`}
          key={gi}
        >
          <div className="page-content-inner">
            <div className="service-group-header">
              <span className="service-group-icon">{group.icon}</span>
              <h2>{group.title}</h2>
            </div>
            <div className="service-detail-grid">
              {group.items.map((item, ii) => (
                <div className="service-detail-card" key={ii}>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process overview */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <div className="page-content-center">
            <span className="page-badge-2">HOW IT WORKS</span>
            <h2>Your Journey with Apex</h2>
            <p className="page-lead">Getting the care you need is simple and stress-free.</p>
          </div>
          <div className="page-steps">
            <div className="page-step">
              <div className="page-step-num">1</div>
              <h3>Reach Out</h3>
              <p>Call, WhatsApp, or book online. Our team responds within minutes.</p>
            </div>
            <div className="page-step-arrow">→</div>
            <div className="page-step">
              <div className="page-step-num">2</div>
              <h3>Get Assessed</h3>
              <p>We understand your needs and match you with the right care.</p>
            </div>
            <div className="page-step-arrow">→</div>
            <div className="page-step">
              <div className="page-step-num">3</div>
              <h3>Receive Care</h3>
              <p>At our clinic, your home, your hotel, or via tele-consultation.</p>
            </div>
            <div className="page-step-arrow">→</div>
            <div className="page-step">
              <div className="page-step-num">4</div>
              <h3>Follow Up</h3>
              <p>We stay with you throughout your recovery and ongoing health journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta" style={{background: 'linear-gradient(135deg, #7b1315 0%, #ee2b36 100%)'}}>
        <div className="page-cta-inner">
          <h2>Need a Service Not Listed Here?</h2>
          <p>Contact us — we'll find the right healthcare solution for you.</p>
          <div className="page-cta-actions">
            <a href="/reach-us" className="btn-hero btn-hero-primary">Get in Touch</a>
            <a href="https://wa.me/255123456789" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-secondary">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
