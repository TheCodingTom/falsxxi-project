import { Mail, MapPin, Music } from "lucide-react";

import "../styles/Contact.css";
import { TiSocialInstagram } from "react-icons/ti";

function Contact() {
  return (
    <div className="contact-info-section">
      <div className="info-card">
        <h2 className="section-title">Get In Touch</h2>
        <div className="info-list">
          <div className="info-item">
            <Mail className="icon" />
            <div>
              <h3 className="item-title">Email</h3>
              <p className="item-text">ragazzifalsxxi@gmai.com </p>
            </div>
          </div>
          <div className="info-item">
            <MapPin className="icon" />
            <div>
              <h3 className="item-title">Location</h3>
              <p className="item-text">
                Valtellina (Home of Polenta and Braulio), Italy
              </p>
              <p className="item-subtext">Available for events across Europe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="info-card">
        <h2 className="section-title">Follow Us</h2>
        <div className="social-grid">
          <a href="#" className="social-link">
            <TiSocialInstagram className="icon" />
            <span className="social-text">Instagram</span>
          </a>

          <a href="#" className="social-link">
            <Music className="icon" />
            <span className="social-text">Spotify</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
