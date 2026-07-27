import './OurNetwork.css';

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
          <span className="network-badge">OUR NETWORK</span>
          <h2 className="network-title">Trusted Healthcare Partners</h2>
          <p className="network-subtitle">
            At Apex Healthcare, we work closely with a trusted network of healthcare partners to
            ensure every patient receives the right care at the right time.
          </p>
        </div>
        <div className="network-grid">
          {partners.map((p, i) => (
            <div className="network-item" key={i}>
              <div className="network-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
