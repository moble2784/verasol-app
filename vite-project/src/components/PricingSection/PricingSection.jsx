import React, { useState } from 'react';
import Container from '../UI/Container/Container';
import ShoppingCartIcon from '../UI/ShoppingCartIcon/ShoppingCartIcon'; // Importa el nuevo icono
import styles from './PricingSection.module.css';

const PricingSection = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 40;

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount)); // Se asegura que la cantidad sea al menos 1
  };

  const handleAddToCart = () => {
    // Lógica para añadir al carrito (por ahora es una alerta)
    console.log(`Agregado al carrito: ${quantity} x Verasol @ S/ ${price.toFixed(2)} c/u`);
    alert(`Agregaste ${quantity} unidad(es) de Verasol al carrito.`);
  };

  return (
    <section id="precio" className={styles.pricingSection}>
      <Container className={styles.pricingContainer}>
        {/* Tarjeta de Producto */}
        <div className={styles.pricingCard}>
          
          <h2 className={styles.title}>Adquiere tu Verasol</h2>
          
          <p className={styles.description}>
            Verasol es una loción capilar natural diseñada para fortalecer, revitalizar y estimular el crecimiento del cabello desde la raíz. Su fórmula combina Aloe Vera, que hidrata y calma el cuero cabelludo, con Romero, conocido por activar la circulación y prevenir la caída capilar. La Canela y el Jengibre aportan propiedades estimulantes que nutren el folículo piloso, mientras que la Vitamina E protege contra el daño oxidativo, ayudando a mantener un cabello sano, fuerte y con brillo natural.
            <br/><br/>
            Ideal para todo tipo de cabello, especialmente para quienes buscan una solución efectiva y libre de químicos agresivos.
          </p>
          
          <div className={styles.priceDisplay}>
            <span className={styles.currency}>S/</span>{price.toFixed(2)}
          </div>
          
          <div className={styles.quantitySelector}>
            <button onClick={() => handleQuantityChange(-1)} className={styles.quantityButton} aria-label="Disminuir cantidad">-</button>
            <span className={styles.quantityNumber}>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className={styles.quantityButton} aria-label="Aumentar cantidad">+</button>
          </div>
          
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            <ShoppingCartIcon />
            <span>Agregar al Carrito</span>
          </button>

        </div>
      </Container>
    </section>
  );
};

export default PricingSection;