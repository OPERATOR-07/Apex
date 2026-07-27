import './PageHero.css';

export default function ReachUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="page-hero-badge">GET IN TOUCH</span>
            <h1 className="page-hero-title">We're Here When You Need Us</h1>
            <p className="page-hero-text">
              Whether you need medical advice, a clinic appointment, a home visit, or healthcare at
              your hotel — our team is ready to assist you. Reach out through any of the channels
              below, and we'll respond promptly.
            </p>
          </div>
          <div className="page-hero-image-col">
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.16 (2).jpeg"
              alt="Contact Apex Healthcare"
              className="page-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="page-content-section">
        <div className="page-content-inner">
          <div className="page-content-center">
            <span className="page-badge-2">CONTACT INFORMATION</span>
            <h2>How to Reach Us</h2>
            <p className="page-lead">
              Choose the method that works best for you. We aim to respond to every enquiry
              within 30 minutes during operating hours.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card contact-card--accent">
              <div className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Our Location</h3>
              <p className="contact-detail">Zanzibar, Tanzania</p>
              <p className="contact-note">We provide services across the entire island — from Stone Town to Nungwi, and everywhere in between.</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p className="contact-detail"><a href="tel:+255123456789">+255 123 456 789</a></p>
              <p className="contact-note">Available 24/7 for urgent medical enquiries and emergencies.</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p className="contact-detail"><a href="mailto:info@apexhealthcare.co.tz">info@apexhealthcare.co.tz</a></p>
              <p className="contact-note">For non-urgent enquiries, appointments, and partnership opportunities. We respond within 2 hours.</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p className="contact-detail"><a href="https://wa.me/255123456789" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></p>
              <p className="contact-note">The fastest way to reach us. Send a message and our team will respond within minutes.</p>
            </div>

            <div className="contact-card contact-card--wide">
              <div className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-wide-content">
                <h3>Operating Hours</h3>
                <p className="contact-detail"><strong>24/7</strong> — We're always here for you.</p>
                <p className="contact-note">Our medical team is on call around the clock. Routine appointments are available daily from 8:00 AM to 8:00 PM. Emergency services are available 24 hours a day, 7 days a week, including public holidays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <div className="page-content-center">
            <span className="page-badge-2">BOOK AN APPOINTMENT</span>
            <h2>Ready to Get Started?</h2>
            <p className="page-lead">
              Booking your appointment is simple. Choose your preferred method and we'll take
              care of the rest.
            </p>
          </div>
          <div className="booking-options">
            <div className="booking-card">
              <div className="booking-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our team to schedule your appointment.</p>
              <a href="tel:+255123456789" className="btn-primary">+255 123 456 789</a>
            </div>
            <div className="booking-card">
              <div className="booking-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>Send us a message and we'll confirm your appointment within minutes.</p>
              <a href="https://wa.me/255123456789" target="_blank" rel="noopener noreferrer" className="btn-primary">Chat on WhatsApp</a>
            </div>
            <div className="booking-card">
              <div className="booking-icon">📧</div>
              <h3>Email Us</h3>
              <p>Send us your details and preferred time, and we'll get back to you.</p>
              <a href="mailto:info@apexhealthcare.co.tz" className="btn-primary">Send Email</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
