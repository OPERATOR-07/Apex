import './WhyChooseUs.css';
import { HospitalIcon, HandshakeIcon, MonitorIcon, ShieldIcon } from './Icons';
import Reveal from './Reveal';

const reasons = [
  {
    icon: HospitalIcon,
    title: 'Comprehensive Healthcare Access',
    text: 'From hospital appointments to home-based services, we cover every aspect of patient care.',
  },
  {
    icon: HandshakeIcon,
    title: 'Multi-Provider Network',
    text: 'We partner with top healthcare institutions and specialists to ensure the best care possible.',
  },
  {
    icon: MonitorIcon,
    title: 'Technology-Driven Healthcare',
    text: 'Our online appointment system and tele-health services make healthcare more accessible.',
  },
  {
    icon: ShieldIcon,
    title: 'Insurance-Covered Services',
    text: 'Our collaborations with major insurance providers make quality healthcare affordable.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="why-inner">
        <div className="why-header">
          <Reveal>
            <span className="why-badge">WHY APEX</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="why-title">Why Choose Us</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="why-subtitle">
              We redefine healthcare by putting you at the center of everything we do.
            </p>
          </Reveal>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal delay={i * 120} key={i}>
                <div className="why-card">
                  <div className="why-icon-wrap">
                    <Icon size={28} />
                  </div>
                  <h3 className="why-card-title">{r.title}</h3>
                  <p className="why-card-text">{r.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
