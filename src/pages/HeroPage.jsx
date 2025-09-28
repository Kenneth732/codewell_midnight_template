
import React from 'react';
import styles from "../styles/HeroPage.module.css";

const HeroPage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundAnimation}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Elevate Your
            <span className={styles.gradientText}> Digital Experience</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover the perfect blend of innovation and elegance with our premium solutions. 
            Designed for those who appreciate excellence in every detail.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              Get Started
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className={styles.secondaryButton}>
              <i className="fas fa-play-circle"></i>
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Premium Performance</h3>
              </div>
              <p>Experience unmatched speed and reliability with our optimized solutions.</p>
            </div>
          </div>
          
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Elegant Design</h3>
              </div>
              <p>Enjoy beautifully crafted interfaces that prioritize user experience.</p>
            </div>
          </div>
          
          <div className={styles.mainVisual}>
            <div className={styles.orb}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;