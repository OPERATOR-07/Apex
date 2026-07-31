import './Specialties.css';
import Reveal from './Reveal';

const specialties = [
  {
    title: 'Healthcare and Well-Being Service',
    img: '/statics/WhatsApp Image 2026-07-25 at 21.31.11 (1).jpeg',
  },
  {
    title: 'Home Healthcare Services',
    img: '/statics/WhatsApp Image 2026-07-25 at 21.31.11.jpeg',
  },
  {
    title: 'Imaging and Diagnostic Services',
    img: '/statics/WhatsApp Image 2026-07-25 at 21.31.13.jpeg',
  },
  {
    title: 'Pharmacy / Prescription Services',
    img: '/statics/WhatsApp Image 2026-07-25 at 21.31.15.jpeg',
  },
];

export default function Specialties() {
  return (
    <section className="specialties">
      <div className="specialties-inner">
        <Reveal>
          <h2 className="specialties-title">Our Services</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="specialties-subtitle">
            Comprehensive care, built around you — from clinic to home, we've got you covered.
          </p>
        </Reveal>
        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <Reveal delay={i * 120} key={i}>
              <div className="specialty-card">
                <div className="specialty-img-wrapper">
                  <img src={s.img} alt={s.title} className="specialty-img" />
                </div>
                <h3 className="specialty-name">{s.title}</h3>
                <p className="specialty-desc">
                  Professional healthcare services tailored to your needs, delivered with compassion and expertise.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
