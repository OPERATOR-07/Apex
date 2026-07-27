import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-image-col">
          <img
            src="/statics/WhatsApp Image 2026-07-25 at 21.31.17.jpeg"
            alt="About Apex Healthcare"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <span className="about-badge">ABOUT US</span>
          <h2 className="about-heading">Who We Are</h2>
          <p className="about-text">
            Apex Healthcare is a modern healthcare company committed to delivering accessible,
            patient-centered medical services across <strong>Zanzibar</strong>. We combine clinical
            excellence with personalized care to provide a seamless healthcare experience — whether
            at our clinic, in your home, at your hotel, or through virtual consultations.
          </p>
          <p className="about-text">
            Our approach goes beyond treating illness — we coordinate your healthcare journey,
            connecting you with trusted specialists, diagnostic services, and hospitals whenever
            advanced care is needed.
          </p>
          <p className="about-text">
            At Apex, every patient receives the attention, professionalism, and compassion they
            deserve.
          </p>
          <a href="/reach-us" className="btn-primary">Book an Appointment</a>
        </div>
      </div>
    </section>
  );
}
