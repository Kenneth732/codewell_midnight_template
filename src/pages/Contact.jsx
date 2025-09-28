import React, { useState } from 'react';
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Let's Create Something Amazing</h2>
          <p className={styles.sectionSubtitle}>
            Ready to bring your ideas to life? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>
              <p className={styles.infoDescription}>
                We're here to help you bring your vision to life. Reach out and let's start the conversation.
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.methodContent}>
                    <h4>Email Us</h4>
                    <p>kennethmburu21@gmail.com</p>
                    <span>We'll reply within 24 hours</span>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className={styles.methodContent}>
                    <h4>Call Us</h4>
                    <p>+254 (742) 164-615</p>
                    <span>Mon-Fri from 8am to 6pm</span>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={styles.methodContent}>
                    <h4>Visit Us</h4>
                    <p>123 Design Street</p>
                    <span>Creative City, CC 10101</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h4>Follow Along</h4>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
      </div>
    </section>
  );
};

export default Contact;