import './PageHero.css';

const networkPartners = [
  {
    category: 'Hospitals & Emergency Care',
    icon: '🏥',
    items: [
      { name: 'Leading Hospitals', desc: 'We partner with Zanzibar\'s top public and private hospitals to ensure you have access to advanced medical care, emergency services, and surgical facilities whenever needed.' },
      { name: 'Emergency Medical Services', desc: 'Coordinated emergency response and ambulance services available 24/7. In critical situations, we ensure rapid transport and seamless handover to emergency departments.' },
    ],
  },
  {
    category: 'Medical Professionals',
    icon: '👨‍⚕️',
    items: [
      { name: 'Specialist Doctors', desc: 'Our network includes experienced specialists across all major fields — cardiology, dermatology, orthopaedics, paediatrics, gynaecology, neurology, and more.' },
      { name: 'General Practitioners', desc: 'A curated team of trusted GPs who provide primary care, preventive medicine, and ongoing health management with a personal touch.' },
    ],
  },
  {
    category: 'Diagnostics & Pharmacy',
    icon: '🔬',
    items: [
      { name: 'Diagnostic Laboratories', desc: 'Accredited laboratories equipped with modern technology for accurate and timely test results. We coordinate sample collection, testing, and result delivery.' },
      { name: 'Medical Imaging Centres', desc: 'State-of-the-art imaging facilities offering MRI, CT scans, X-ray, ultrasound, and echocardiography with rapid reporting and digital result sharing.' },
      { name: 'Pharmacies', desc: 'Trusted pharmacy partners across Zanzibar ensuring authentic medications, competitive pricing, and prompt delivery to your location.' },
    ],
  },
  {
    category: 'Hospitality & Corporate',
    icon: '🏨',
    items: [
      { name: 'Hotels & Resorts', desc: 'Preferred healthcare provider for leading hotels and resorts in Zanzibar. We offer on-call medical services, guest consultations, and emergency response for visitors.' },
      { name: 'Corporate Partners', desc: 'Comprehensive occupational health services for businesses, including employee wellness programs, health screenings, and on-site medical support.' },
    ],
  },
];

export default function NetworksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="page-hero-badge">OUR NETWORK</span>
            <h1 className="page-hero-title">Trusted Healthcare Partners</h1>
            <p className="page-hero-text">
              At Apex Healthcare, we work closely with a carefully selected network of healthcare
              partners to ensure every patient receives the right care at the right time. Our
              partnerships span hospitals, specialists, diagnostics, pharmacies, and hospitality
              providers across Zanzibar.
            </p>
          </div>
          <div className="page-hero-image-col">
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.16 (2).jpeg"
              alt="Apex Healthcare network"
              className="page-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Network Categories */}
      {networkPartners.map((group, gi) => (
        <section
          className={`page-content-section ${gi % 2 === 1 ? 'page-content-section--alt' : ''}`}
          key={gi}
        >
          <div className="page-content-inner">
            <div className="service-group-header">
              <span className="service-group-icon">{group.icon}</span>
              <h2>{group.category}</h2>
            </div>
            <div className="network-detail-grid">
              {group.items.map((item, ii) => (
                <div className="network-detail-card" key={ii}>
                  <div className="network-detail-card-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7b1315" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <h3>{item.name}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats / Impact */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <div className="page-stats-grid">
            <div className="page-stat">
              <span className="page-stat-num">50+</span>
              <span className="page-stat-label">Healthcare Partners</span>
            </div>
            <div className="page-stat">
              <span className="page-stat-num">24/7</span>
              <span className="page-stat-label">Emergency Coordination</span>
            </div>
            <div className="page-stat">
              <span className="page-stat-num">100%</span>
              <span className="page-stat-label">Coverage in Zanzibar</span>
            </div>
            <div className="page-stat">
              <span className="page-stat-num">15+</span>
              <span className="page-stat-label">Hotel & Resort Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta" style={{background: 'linear-gradient(135deg, #7b1315 0%, #ee2b36 100%)'}}>
        <div className="page-cta-inner">
          <h2>Want to Partner with Apex Healthcare?</h2>
          <p>We're always looking to expand our network. Reach out to explore collaboration opportunities.</p>
          <div className="page-cta-actions">
            <a href="/reach-us" className="btn-hero btn-hero-primary">Contact Us</a>
            <a href="mailto:info@apexhealthcare.co.tz" className="btn-hero btn-hero-secondary">Send an Email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
