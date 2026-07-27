import './WhyChooseUs.css';

const reasons = [
  {
    icon: '🏥',
    title: 'Comprehensive Healthcare Access',
    text: 'From hospital appointments to home-based services, we cover every aspect of patient care.',
  },
  {
    icon: '🤝',
    title: 'Multi-Provider Network',
    text: 'We partner with top healthcare institutions and specialists to ensure the best care possible.',
  },
  {
    icon: '💻',
    title: 'Technology-Driven Healthcare',
    text: 'Our online appointment system and tele-health services make healthcare more accessible.',
  },
  {
    icon: '🛡️',
    title: 'Insurance-Covered Services',
    text: 'Our collaborations with major insurance providers make quality healthcare affordable.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="why-inner">
        <div className="why-header">
          <span className="why-badge">WHY APEX</span>
          <h2 className="why-title">Why Choose Us</h2>
          <p className="why-subtitle">
            We redefine healthcare by putting you at the center of everything we do.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon-wrap">
                <span className="why-icon-emoji">{r.icon}</span>
              </div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
