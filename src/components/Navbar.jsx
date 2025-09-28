

import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useLocation } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navigations = [
    { id: 1, name: 'Home', path: '/', icon: 'home' },
    { id: 2, name: 'About', path: '/about', icon: 'info' },
    { id: 3, name: 'Portfolio', path: '/portfolio', icon: 'briefcase' },
    { id: 4, name: 'Contact', path: '/contact', icon: 'envelope' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // You can add logic here to change the theme of your entire app
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={`${styles.navHeader} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <i className="fas fa-gem"></i>
          Dr.Codewell
        </Link>

        {/* Hamburger menu for mobile */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navigations.map((item) => (
            <li className={styles.navItem} key={item.id}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <i className={`fas fa-${item.icon}`}></i>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button className={styles.searchBtn} aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
          <button 
            className={`${styles.themeToggle} ${theme === 'light' ? styles.light : ''}`} 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </button>
          <Link to="/get-started" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

