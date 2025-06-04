import React from 'react';
// El estilo de este icono se manejará en Header.module.css
const MenuIcon = ({ isOpen }) => (
  <div className={`hamburgerIcon ${isOpen ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default MenuIcon;