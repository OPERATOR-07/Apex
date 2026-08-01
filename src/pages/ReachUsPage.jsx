import './PageHero.css';
import { MapPinIcon, PhoneIcon, MailIcon, WhatsAppIcon, ClockIcon, CalendarIcon } from '../components/Icons';
import Reveal from '../components/Reveal';

const contactCards = [
  {
    icon: MapPinIcon,
    title: 'Our Location',
    detail: 'Zanzibar, Tanzania',
    note: 'We provide services across the entire island — from Stone Town to Nungwi, and everywhere in between.',
    accent: true,
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    detail: '+255 705 239 600',
    detailHref: 'tel:+255705239600',
    note: 'Available 24/7 for urgent medical enquiries and emergencies.',
  },
  {
    icon: MailIcon,
    title: 'Email',
    detail: 'info@apexhealthcare.site',
    detailHref: 'mailto:info@apexhealthcare.site',
    note: 'For non-urgent enquiries, appointments, and partnership opportunities. We respond within 2 hours.',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    detail: 'Chat with us on WhatsApp',
    detailHref: 'https://wa.me/255705239600',
    external: true,
    note: 'The fastest way to reach us. Send a message and our team will respond within minutes.',
  },
  {
    icon: ClockIcon,
    title: 'Operating Hours',
    detail: '24/7 — We\'re always here for you.',
    note: 'Our medical team is on call around the clock. Routine appointments are available daily from 8:00 AM to 8:00 PM. Emergency services are available 24 hours a day, 7 days a week, including public holidays.',
    wide: true,
  },
];

const bookingOptions = [
  { icon: PhoneIcon, title: 'Call Us', text: 'Speak directly with our team to schedule your appointment.', href: 'tel:+255705239600', label: '+255 705 239 600' },
  { icon: WhatsAppIcon, title: 'WhatsApp', text: 'Send us a message and we\'ll confirm your appointment within minutes.', href: 'https://wa.me/255705239600', label: 'Chat on WhatsApp', external: true },
  { icon: MailIcon, title: 'Email Us', text: 'Send us your details and preferred time, and we\'ll get back to you.', href: 'mailto:info@apexhealthcare.site', label: 'Send Email' },
];

export default function ReachUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{background: 'linear-gradient(135deg, #7b1315 0%, #c4282e 50%, #ee2b36 100%)'}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <Reveal className="page-hero-content" direction="left">
            <span className="page-hero-badge">GET IN TOUCH</span>
            <h1 className="page-hero-title">We're Here When You Need Us</h1>
            <p className="page-hero-text">
              Whether you need medical advice, a clinic appointment, a home visit, or healthcare at
              your hotel — our team is ready to assist you. Reach out through any of the channels
              below, and we'll respond promptly.
            </p>
          </Reveal>
          <Reveal className="page-hero-image-col" direction="right" delay={150}>
            <img
              src="/statics/WhatsApp Image 2026-07-25 at 21.31.15.jpeg"
              alt="Contact Apex Healthcare"
              className="page-hero-image"
            />
          </Reveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="page-content-section">
        <div className="page-content-inner">
          <Reveal className="page-content-center">
            <span className="page-badge-2">CONTACT INFORMATION</span>
            <h2>How to Reach Us</h2>
            <p className="page-lead">
              Choose the method that works best for you. We aim to respond to every enquiry
              within 30 minutes during operating hours.
            </p>
          </Reveal>
          <div className="contact-grid">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal
                  className={`contact-card ${card.accent ? 'contact-card--accent' : ''} ${card.wide ? 'contact-card--wide' : ''} ${card.wide ? 'reach-card-full-wrap' : ''}`}
                  delay={i * 100}
                  key={i}
                >
                  <div className="contact-icon-wrap">
                    <Icon size={28} />
                  </div>
                  {card.wide ? (
                    <div className="contact-wide-content">
                      <h3>{card.title}</h3>
                      <p className="contact-detail">{card.detail}</p>
                      <p className="contact-note">{card.note}</p>
                    </div>
                  ) : (
                    <>
                      <h3>{card.title}</h3>
                      <p className="contact-detail">
                        {card.detailHref ? (
                          <a href={card.detailHref} {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{card.detail}</a>
                        ) : card.detail}
                      </p>
                      <p className="contact-note">{card.note}</p>
                    </>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="page-content-section page-content-section--alt">
        <div className="page-content-inner">
          <Reveal className="page-content-center">
            <span className="page-badge-2">BOOK AN APPOINTMENT</span>
            <h2>Ready to Get Started?</h2>
            <p className="page-lead">
              Booking your appointment is simple. Choose your preferred method and we'll take
              care of the rest.
            </p>
          </Reveal>
          <div className="booking-options">
            {bookingOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <Reveal delay={i * 140} key={i}>
                  <div className="booking-card">
                    <div className="booking-icon">
                      <Icon size={34} color="#7b1315" />
                    </div>
                    <h3>{opt.title}</h3>
                    <p>{opt.text}</p>
                    <a
                      href={opt.href}
                      className="btn-primary"
                      {...(opt.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {opt.label}
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
