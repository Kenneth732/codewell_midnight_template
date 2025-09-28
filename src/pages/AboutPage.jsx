

import React from 'react';
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutBackground}>
        <div className={styles.backgroundPattern}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionSubtitle}>Crafting exceptional digital experiences with passion and precision</p>
          <div className={styles.titleDivider}></div>
        </div>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.intro}>
              <h3>We Are <span className={styles.highlight}>Visionaries</span> & <span className={styles.highlight}>Creators</span></h3>
              <p>
                Founded in 2015, we've been at the forefront of digital innovation, helping brands 
                transform their ideas into remarkable digital experiences. Our team of passionate 
                designers and developers work together to create solutions that not only look 
                beautiful but also deliver exceptional performance.
              </p>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber} data-count="250">250</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber} data-count="98">98</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber} data-count="15">15</div>
                <div className={styles.statLabel}>Team Members</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber} data-count="7">7</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
            </div>
            
            <div className={styles.ctaSection}>
              <button className={styles.ctaButton}>
                Our Portfolio
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className={styles.outlineButton}>
                <i className="fas fa-calendar"></i>
                Schedule a Call
              </button>
            </div>
          </div>
          
          <div className={styles.aboutVisual}>
            <div className={styles.imageGrid}>
              <div className={styles.mainImage}>
                <div className={styles.imagePlaceholder}></div>
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.secondaryImage}></div>
              <div className={styles.tertiaryImage}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Our Core Values</h3>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <p>We constantly explore new ideas and technologies to stay ahead of the curve.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-heart"></i>
              </div>
              <h4>Passion</h4>
              <p>We genuinely love what we do, and it shows in every project we deliver.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Excellence</h4>
              <p>We never settle for good enough, always striving for perfection in our work.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Collaboration</h4>
              <p>We believe the best results come from working closely with our clients.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.teamSection}>
          <h3 className={styles.teamTitle}>Meet Our Leadership</h3>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <div className={styles.photoPlaceholder}></div>
                <div className={styles.socialLinks}>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
              <h4>Sarah Johnson</h4>
              <p>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <div className={styles.photoPlaceholder}></div>
                <div className={styles.socialLinks}>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
              <h4>Michael Chen</h4>
              <p>Creative Director</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <div className={styles.photoPlaceholder}></div>
                <div className={styles.socialLinks}>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
              <h4>Elena Rodriguez</h4>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

