
import React, { useState } from 'react';
import styles from "../styles/PortfolioPage.module.css";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web Design' },
    { id: 'app', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' },
    { id: 'ui', label: 'UI/UX' }
  ];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant E-Commerce Platform',
      category: 'web',
      description: 'A premium online shopping experience with seamless checkout flow',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Finance Dashboard UI',
      category: 'ui',
      description: 'Data visualization for financial analytics with dark mode',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Fitness Mobile Application',
      category: 'app',
      description: 'Workout tracking and personal coaching app',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Luxury Brand Identity',
      category: 'branding',
      description: 'Complete visual identity for high-end fashion brand',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Real Estate Web Platform',
      category: 'web',
      description: 'Property listings with virtual tours and advanced filtering',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Health & Wellness App',
      category: 'app',
      description: 'Meditation and mental wellbeing application',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      title: 'Tech Conference Branding',
      category: 'branding',
      description: 'Visual identity for annual technology conference',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      title: 'Dashboard Design System',
      category: 'ui',
      description: 'Comprehensive UI kit for SaaS applications',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioBackground}>
        <div className={styles.backgroundAnimation}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Portfolio</h2>
          <p className={styles.sectionSubtitle}>A showcase of our finest work and creative solutions</p>
          <div className={styles.titleDivider}></div>
        </div>
        
        <div className={styles.portfolioFilters}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className={styles.portfolioGrid}>
          {filteredItems.map(item => (
            <div key={item.id} className={`${styles.portfolioItem} ${item.featured ? styles.featured : ''}`}>
              <div className={styles.portfolioImage}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <div className={styles.portfolioOverlay}>
                  <div className={styles.portfolioActions}>
                    <button className={styles.actionButton}>
                      <i className="fas fa-expand"></i>
                    </button>
                    <button className={styles.actionButton}>
                      <i className="fas fa-link"></i>
                    </button>
                  </div>
                </div>
                {item.featured && (
                  <div className={styles.featuredBadge}>
                    <i className="fas fa-star"></i>
                    Featured
                  </div>
                )}
              </div>
              <div className={styles.portfolioContent}>
                <h3 className={styles.portfolioTitle}>{item.title}</h3>
                <p className={styles.portfolioDescription}>{item.description}</p>
                <div className={styles.portfolioCategory}>{item.category}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to create something amazing together?</h3>
          <p className={styles.ctaText}>Let's discuss your project and how we can help bring your vision to life</p>
          <button className={styles.ctaButton}>
            Start a Project
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        
        <div className={styles.testimonialsSection}>
          <h3 className={styles.testimonialsTitle}>Client Testimonials</h3>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className={styles.testimonialText}>
                  "Working with this team transformed our digital presence. Their attention to detail and creative solutions exceeded our expectations."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Sarah Johnson</h4>
                  <p className={styles.authorPosition}>CEO, Luxury Brands</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className={styles.testimonialText}>
                  "The design process was collaborative and innovative. They delivered a product that not only looks stunning but performs exceptionally."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Michael Chen</h4>
                  <p className={styles.authorPosition}>Product Director, TechStart</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className={styles.testimonialText}>
                  "Their ability to understand our vision and translate it into a beautiful, functional product was impressive. A truly premium experience."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Elena Rodriguez</h4>
                  <p className={styles.authorPosition}>Marketing Director, NovaTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;

