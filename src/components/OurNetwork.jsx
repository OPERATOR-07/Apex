import './OurNetwork.css';
import Reveal from './Reveal';

const partners = [
  'Leading Hospitals',
  'Specialist Doctors',
  'Diagnostic Laboratories',
  'Medical Imaging Centres',
  'Pharmacies',
  'Hotels & Resorts',
  'Corporate Partners',
  'Emergency Medical Services',
];

export default function OurNetwork() {
  return (
    <section className="network-section">
      <div className="network-inner">
        <div className="network-header">
          <Reveal>
            <span className="network-badge">OUR NETWORK</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="network-title">Trusted Healthcare Partners</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="network-subtitle">
              At Apex Healthcare, we work closely with a trusted network of healthcare partners to
              ensure every patient receives the right care at the right time.
            </p>
          </Reveal>
        </div>
        <div className="network-grid">
          {partners.map((p, i) => (
            <Reveal delay={(i % 4) * 100 + Math.floor(i / 4) * 60} key={i}>
              <div className="network-item">
                <div className="network-item-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span>{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
