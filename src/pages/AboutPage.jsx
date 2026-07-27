import './PageHero.css';

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <span className="page-hero-badge">ABOUT US</span>
            <h1 className="page-hero-title">Who We Are</h1>
            <p className="page-hero-text">
              Apex Healthcare is a modern healthcare company committed to delivering accessible,
              patient-centered medical services across Zanzibar. We combine clinical excellence
              with personalized care to provide a seamless healthcare experience.
            </p>
          </div>
          <div className="page-hero-image-col">
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.10 (2).jpeg"
              alt="Apex Healthcare team"
              className="page-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Who We Are — Detail */}
      <section className="page-content-section">
        <div className="page-content-inner">
          <div className="page-content-row">
            <div className="page-content-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to transform healthcare in Zanzibar, Apex Healthcare was
                built on the belief that everyone deserves access to quality medical care —
                regardless of where they are. Whether you're a resident, an expatriate, or a
                visitor staying at one of Zanzibar's beautiful resorts, we ensure you receive
                the medical attention you need, when you need it.
              </p>
              <p>
                Our team consists of experienced physicians, nurses, and healthcare coordinators
                who work together to provide a seamless, concierge-level experience. We handle
                everything from routine check-ups to complex medical coordination, so you can
                focus on your health and well-being.
              </p>
            </div>
            <div className="page-content-image">
              <img
                src="/statics/WhatsApp Image 2026-07-25 at 21.31.10.jpeg"
                alt="Our medical team at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <div className="page-content-center">
            <span className="page-badge-2">OUR MISSION</span>
            <h2>Bringing Quality Healthcare Closer to You</h2>
            <p className="page-lead">
              At Apex Healthcare, our approach goes beyond treating illness — we coordinate your
              entire healthcare journey. We connect you with trusted specialists, diagnostic
              services, and hospitals whenever advanced care is needed.
            </p>
          </div>
          <div className="page-values-grid">
            <div className="page-value-card">
              <div className="page-value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Every patient receives the attention, respect, and kindness they deserve. We treat you like family.</p>
            </div>
            <div className="page-value-card">
              <div className="page-value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of medical care through continuous training and quality improvement.</p>
            </div>
            <div className="page-value-card">
              <div className="page-value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Transparency, honesty, and reliability form the foundation of every patient relationship we build.</p>
            </div>
            <div className="page-value-card">
              <div className="page-value-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>Healthcare should be available to everyone. We bring our services to you — at home, at your hotel, or online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apex */}
      <section className="page-content-section">
        <div className="page-content-inner">
          <div className="page-content-row page-content-row--reverse">
            <div className="page-content-text">
              <span className="page-badge-2">WHY CHOOSE US</span>
              <h2>What Sets Apex Apart</h2>
              <ul className="page-checklist">
                <li><strong>Concierge-Level Service</strong> — Your personal healthcare coordinator handles every detail, from appointment scheduling to follow-up care.</li>
                <li><strong>Comprehensive Network</strong> — We connect you with leading hospitals, specialists, diagnostic centres, and pharmacies across Zanzibar.</li>
                <li><strong>Flexible Care Options</strong> — Clinic visits, home calls, hotel medical services, and tele-consultations — you choose what works best.</li>
                <li><strong>24/7 Availability</strong> — Medical advice and support whenever you need it, day or night.</li>
                <li><strong>Coordinated Specialist Care</strong> — Seamless referrals and follow-ups with trusted specialists and advanced care facilities.</li>
              </ul>
            </div>
            <div className="page-content-image">
              <img
                src="/statics/WhatsApp Image 2026-07-25 at 21.31.16 (1).jpeg"
                alt="Apex Healthcare consultation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta" style={{background: 'linear-gradient(135deg, #7b1315 0%, #ee2b36 100%)'}}>
        <div className="page-cta-inner">
          <h2>Ready to Experience the Apex Difference?</h2>
          <p>Schedule your appointment today and discover healthcare that's built around you.</p>
          <div className="page-cta-actions">
            <a href="/reach-us" className="btn-hero btn-hero-primary">Book an Appointment</a>
            <a href="/reach-us" className="btn-hero btn-hero-secondary">Request a Home Visit</a>
          </div>
        </div>
      </section>
    </main>
  );
}
