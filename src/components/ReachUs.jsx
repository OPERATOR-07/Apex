import './ReachUs.css';
import Reveal from './Reveal';

export default function ReachUs() {
  return (
    <section className="reach-section">
      <div className="reach-inner">
        <div className="reach-header">
          <Reveal>
            <span className="reach-badge">GET IN TOUCH</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="reach-title">We're Here When You Need Us</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="reach-subtitle">
              Whether you need medical advice, a clinic appointment, a home visit, or healthcare at
              your hotel — our team is ready to assist you.
            </p>
          </Reveal>
        </div>
        <div className="reach-grid">
          <Reveal delay={80}>
            <div className="reach-card">
              <div className="reach-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Our Location</h3>
              <p>Zanzibar, Tanzania</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="reach-card">
              <div className="reach-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+2557868441951">+255 786 844 1951</a></p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="reach-card">
              <div className="reach-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:info@apexhealthcare.site">info@apexhealthcare.site</a></p>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="reach-card">
              <div className="reach-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/2557868441951" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
            </div>
          </Reveal>
          <Reveal delay={400} className="reach-card-full-wrap">
            <div className="reach-card reach-card-full">
              <div className="reach-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Operating Hours</h3>
              <p><strong>24/7</strong> — We're always here for you.</p>
            </div>
          </Reveal>
        </div>
        <div className="reach-actions">
          <a href="/reach-us" className="btn-hero btn-hero-primary">Book an Appointment</a>
          <a href="/reach-us" className="btn-hero btn-hero-secondary-outline">Request a Home Visit</a>
        </div>
      </div>
    </section>
  );
}
