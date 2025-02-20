import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin, HeartPulse } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><Mail size={16} /> Email: support@medicare.com</p>
          <p><Phone size={16} /> Phone: +91 234 567 890</p>
          <p><MapPin size={16} /> Location: 123 ABC Place</p>
        </div>
        
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Medicare | Stay Healthy, Stay Informed <HeartPulse size={16} /></p>
      </div>
    </footer>
  );
};

export default Footer;

