import React from 'react';
import Container from '../UI/Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <Container className={styles.textCenter}>
        <p>&copy; {new Date().getFullYear()} Verasol. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;