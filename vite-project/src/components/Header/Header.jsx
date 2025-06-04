import React, { useState, useEffect } from 'react';
// No necesitamos importar Container de UI para este nuevo layout del header
import UserIcon from '../UI/UserIcon';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.siteHeader} ${isScrolled ? styles.scrolled : ''}`}>
      {/* En lugar de usar el componente <Container> que tiene un max-width,
        usamos un div simple y le aplicamos estilos para padding y distribución.
      */}
      <div className={styles.headerContentWrapper}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>Verasol</a>
        <nav className={`${styles.mainNav} ${menuOpen ? styles.active : ''}`}>
          <ul>
            <li><a href="#hero" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#ingredientes" onClick={closeMenu}>Ingredientes</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.userButton} aria-label="Cuenta de usuario">
            <UserIcon size={22} /> {/* Ligeramente más grande el icono */}
          </button>
          <button 
            className={`${styles.mobileMenuToggle} ${menuOpen ? styles.active : ''}`} 
            aria-label="Alternar menú" 
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <div className={styles.hamburgerIcon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;