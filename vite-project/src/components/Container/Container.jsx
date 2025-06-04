import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, className = '',elementType = 'div' }) => {
  const Element = elementType; // Permite usar 'div', 'section', etc. como contenedor
  return (
    <Element className={`${styles.container} ${className}`}>
      {children}
    </Element>
  );
};

export default Container;