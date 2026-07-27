import './Specialties.css';

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
        <h2 className="specialties-title">Our Services</h2>
        <p className="specialties-subtitle">
          Comprehensive care, built around you — from clinic to home, we've got you covered.
        </p>
        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <div className="specialty-card" key={i}>
              <div className="specialty-img-wrapper">
                <img src={s.img} alt={s.title} className="specialty-img" />
              </div>
              <h3 className="specialty-name">{s.title}</h3>
              <p className="specialty-desc">
                Professional healthcare services tailored to your needs, delivered with compassion and expertise.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
