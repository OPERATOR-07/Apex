import './PageHero.css';
import { HospitalIcon, StethoscopeIcon, MicroscopeIcon, BuildingIcon, CheckIcon, MailIcon } from '../components/Icons';
import Reveal from '../components/Reveal';

const networkPartners = [
  {
    category: 'Hospitals & Emergency Care',
    icon: HospitalIcon,
    items: [
      { name: 'Leading Hospitals', desc: 'We partner with Zanzibar\'s top public and private hospitals to ensure you have access to advanced medical care, emergency services, and surgical facilities whenever needed.' },
      { name: 'Emergency Medical Services', desc: 'Coordinated emergency response and ambulance services available 24/7. In critical situations, we ensure rapid transport and seamless handover to emergency departments.' },
    ],
  },
  {
    category: 'Medical Professionals',
    icon: StethoscopeIcon,
    items: [
      { name: 'Specialist Doctors', desc: 'Our network includes experienced specialists across all major fields — cardiology, dermatology, orthopaedics, paediatrics, gynaecology, neurology, and more.' },
      { name: 'General Practitioners', desc: 'A curated team of trusted GPs who provide primary care, preventive medicine, and ongoing health management with a personal touch.' },
    ],
  },
  {
    category: 'Diagnostics & Pharmacy',
    icon: MicroscopeIcon,
    items: [
      { name: 'Diagnostic Laboratories', desc: 'Accredited laboratories equipped with modern technology for accurate and timely test results. We coordinate sample collection, testing, and result delivery.' },
      { name: 'Medical Imaging Centres', desc: 'State-of-the-art imaging facilities offering MRI, CT scans, X-ray, ultrasound, and echocardiography with rapid reporting and digital result sharing.' },
      { name: 'Pharmacies', desc: 'Trusted pharmacy partners across Zanzibar ensuring authentic medications, competitive pricing, and prompt delivery to your location.' },
    ],
  },
  {
    category: 'Hospitality & Corporate',
    icon: BuildingIcon,
    items: [
      { name: 'Hotels & Resorts', desc: 'Preferred healthcare provider for leading hotels and resorts in Zanzibar. We offer on-call medical services, guest consultations, and emergency response for visitors.' },
      { name: 'Corporate Partners', desc: 'Comprehensive occupational health services for businesses, including employee wellness programs, health screenings, and on-site medical support.' },
    ],
  },
];

const stats = [
  { num: '50+', label: 'Healthcare Partners' },
  { num: '24/7', label: 'Emergency Coordination' },
  { num: '100%', label: 'Coverage in Zanzibar' },
  { num: '15+', label: 'Hotel & Resort Partners' },
];

export default function NetworksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <Reveal className="page-hero-content" direction="left">
            <span className="page-hero-badge">OUR NETWORK</span>
            <h1 className="page-hero-title">Trusted Healthcare Partners</h1>
            <p className="page-hero-text">
              At Apex Healthcare, we work closely with a carefully selected network of healthcare
              partners to ensure every patient receives the right care at the right time. Our
              partnerships span hospitals, specialists, diagnostics, pharmacies, and hospitality
              providers across Zanzibar.
            </p>
          </Reveal>
          <Reveal className="page-hero-image-col" direction="right" delay={150}>
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.16 (2).jpeg"
              alt="Apex Healthcare network"
              className="page-hero-image"
            />
          </Reveal>
        </div>
      </section>

      {/* Network Categories */}
      {networkPartners.map((group, gi) => {
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
                <h2>{group.category}</h2>
              </Reveal>
              <div className="network-detail-grid">
                {group.items.map((item, ii) => (
                  <Reveal delay={ii * 120} key={ii}>
                    <div className="network-detail-card">
                      <div className="network-detail-card-header">
                        <CheckIcon size={18} strokeWidth={2.5} color="#7b1315" />
                        <h3>{item.name}</h3>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Stats / Impact */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <div className="page-stats-grid">
            {stats.map((stat, i) => (
              <Reveal delay={i * 120} key={i}>
                <div className="page-stat">
                  <span className="page-stat-num">{stat.num}</span>
                  <span className="page-stat-label">{stat.label}</span>
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
            <h2>Want to Partner with Apex Healthcare?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>We're always looking to expand our network. Reach out to explore collaboration opportunities.</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="page-cta-actions">
              <a href="/reach-us" className="btn-hero btn-hero-primary">Contact Us</a>
              <a href="mailto:info@apexhealthcare.site" className="btn-hero btn-hero-secondary">
                <span className="btn-icon-inline"><MailIcon size={18} /></span> Send an Email
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
