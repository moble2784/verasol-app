import React from 'react';
import Container from '../UI/Container/Container';
import styles from './HeroSection.module.css';
import productImg from '../../assets/verasol-product.png'; // Asegúrate que la ruta sea correcta

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <Container className={styles.heroLayout}>
        <div className={styles.heroTextContent}>
          <h1 className={styles.heroTitle}>
            DESCUBRE EL PODER DE <span className={styles.highlightText}>VERASOL</span> Y LA NATURALEZA
          </h1>
          <p className={styles.heroSubtitle}>
            Loción Capilar Premium para un Cabello Fuerte y Radiante.
          </p>
          <a href="#contacto" className={styles.ctaButton}>Conoce Más</a>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={productImg} alt="Producto Verasol Loción Capilar" />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;