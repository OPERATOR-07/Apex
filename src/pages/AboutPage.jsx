import './PageHero.css';
import { HeartIcon, TargetIcon, HandshakeIcon, GlobeIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';

const values = [
  { icon: HeartIcon, title: 'Compassion', text: 'Every patient receives the attention, respect, and kindness they deserve. We treat you like family.' },
  { icon: TargetIcon, title: 'Excellence', text: 'We maintain the highest standards of medical care through continuous training and quality improvement.' },
  { icon: HandshakeIcon, title: 'Trust', text: 'Transparency, honesty, and reliability form the foundation of every patient relationship we build.' },
  { icon: GlobeIcon, title: 'Accessibility', text: 'Healthcare should be available to everyone. We bring our services to you — at home, at your hotel, or online.' },
];

const checklist = [
  { strong: 'Concierge-Level Service', rest: ' — Your personal healthcare coordinator handles every detail, from appointment scheduling to follow-up care.' },
  { strong: 'Comprehensive Network', rest: ' — We connect you with leading hospitals, specialists, diagnostic centres, and pharmacies across Zanzibar.' },
  { strong: 'Flexible Care Options', rest: ' — Clinic visits, home calls, hotel medical services, and tele-consultations — you choose what works best.' },
  { strong: '24/7 Availability', rest: ' — Medical advice and support whenever you need it, day or night.' },
  { strong: 'Coordinated Specialist Care', rest: ' — Seamless referrals and follow-ups with trusted specialists and advanced care facilities.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #0c5cb8 0%, #1a86fc 50%, #3c9bff 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <Reveal className="page-hero-content" direction="left">
            <span className="page-hero-badge">ABOUT US</span>
            <h1 className="page-hero-title">Who We Are</h1>
            <p className="page-hero-text">
              Apex Healthcare is a modern healthcare company committed to delivering accessible,
              patient-centered medical services across Zanzibar. We combine clinical excellence
              with personalized care to provide a seamless healthcare experience.
            </p>
          </Reveal>
          <Reveal className="page-hero-image-col" direction="right" delay={150}>
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.10 (2).jpeg"
              alt="Apex Healthcare team"
              className="page-hero-image"
            />
          </Reveal>
        </div>
      </section>

      {/* Who We Are — Detail */}
      <section className="page-content-section">
        <div className="page-content-inner">
          <div className="page-content-row">
            <Reveal className="page-content-text" direction="left">
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
            </Reveal>
            <Reveal className="page-content-image" direction="right" delay={150}>
              <img
                src="/statics/WhatsApp Image 2026-07-25 at 21.31.17.jpeg"
                alt="Our medical team at work"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <Reveal className="page-content-center">
            <span className="page-badge-2">OUR MISSION</span>
            <h2>Bringing Quality Healthcare Closer to You</h2>
            <p className="page-lead">
              At Apex Healthcare, our approach goes beyond treating illness — we coordinate your
              entire healthcare journey. We connect you with trusted specialists, diagnostic
              services, and hospitals whenever advanced care is needed.
            </p>
          </Reveal>
          <div className="page-values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal delay={i * 120} key={i}>
                  <div className="page-value-card">
                    <div className="page-value-icon">
                      <Icon size={34} color="#1f9d49" />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Apex */}
      <section className="page-content-section">
        <div className="page-content-inner">
          <div className="page-content-row page-content-row--reverse">
            <Reveal className="page-content-text" direction="left">
              <span className="page-badge-2">WHY CHOOSE US</span>
              <h2>What Sets Apex Apart</h2>
              <ul className="page-checklist">
                {checklist.map((item, i) => (
                  <li key={i}><strong>{item.strong}</strong>{item.rest}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="page-content-image" direction="right" delay={150}>
              <img
                src="/statics/WhatsApp Image 2026-07-25 at 21.31.16 (1).jpeg"
                alt="Apex Healthcare consultation"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta" style={{background: 'linear-gradient(135deg, #0c5cb8 0%, #3c9bff 100%)'}}>
        <div className="page-cta-inner">
          <Reveal direction="zoom">
            <h2>Ready to Experience the Apex Difference?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Schedule your appointment today and discover healthcare that's built around you.</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="page-cta-actions">
              <Link to="/reach-us" className="btn-hero btn-hero-primary">Book an Appointment</Link>
              <Link to="/reach-us" className="btn-hero btn-hero-secondary">Request a Home Visit</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
