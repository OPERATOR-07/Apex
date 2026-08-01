import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src="/statics/Logos/Apex1.PNG"
            alt="Apex Healthcare"
            className="footer-logo"
          />
          <p className="footer-tagline">Comprehensive Care, Built Around You.</p>
          <p className="footer-trust">Your Trusted Healthcare Partner.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/our-networks">Our Networks</Link></li>
              <li><Link to="/reach-us">Reach Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>Clinic Consultations</li>
              <li>Home & Hotel Visits</li>
              <li>Tele-consultation</li>
              <li>Home Nursing</li>
              <li>Diagnostic Coordination</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>Zanzibar, Tanzania</li>
              <li><a href="tel:+255705239600">+255 705 239 600</a></li>
              <li><a href="mailto:info@apexhealthcare.site">Email Us</a></li>
              <li><a href="https://wa.me/255705239600" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/apexhealthcare.znz" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>&copy; {new Date().getFullYear()} Apex Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
}
