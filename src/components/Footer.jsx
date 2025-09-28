import React from 'react';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <i className="fas fa-gem"></i>
              Dr.Codewell
            </div>
            <p className={styles.brandDescription}>
              Transforming ideas into exceptional digital experiences.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h5 className={styles.linkGroupTitle}>Company</h5>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.footerLink}>About</a></li>
                <li><a href="#" className={styles.footerLink}>Careers</a></li>
                <li><a href="#" className={styles.footerLink}>Blog</a></li>
                <li><a href="#" className={styles.footerLink}>Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h5 className={styles.linkGroupTitle}>Services</h5>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.footerLink}>Web Design</a></li>
                <li><a href="#" className={styles.footerLink}>Development</a></li>
                <li><a href="#" className={styles.footerLink}>UI/UX</a></li>
                <li><a href="#" className={styles.footerLink}>Branding</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h5 className={styles.linkGroupTitle}>Support</h5>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.footerLink}>Help Center</a></li>
                <li><a href="#" className={styles.footerLink}>Privacy</a></li>
                <li><a href="#" className={styles.footerLink}>Terms</a></li>
                <li><a href="#" className={styles.footerLink}>Status</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h5 className={styles.newsletterTitle}>Newsletter</h5>
            <p className={styles.newsletterText}>Get updates and insights.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email" 
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Dr-Codewell. All rights reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <div 
        className={styles.scrollToTop} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </div>
    </footer>
  );
};

export default Footer;