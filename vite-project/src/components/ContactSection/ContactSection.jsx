import React, { useState } from 'react';
import Container from '../UI/Container/Container';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  // ... (estados y funciones handle sin cambios) ...
  const [purchaseFormData, setPurchaseFormData] = useState({
    product: 'Loción Capilar Verasol',
    quantity: 1,
    fullName: '',
    shippingAddress: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const [distributorFormData, setDistributorFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handlePurchaseChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
        const cleanedValue = value.replace(/\D/g, '');
        const formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
        setPurchaseFormData(prevState => ({ ...prevState, [name]: formattedValue }));
    } else if (name === "expiryDate") {
        const cleanedValue = value.replace(/\D/g, '');
        let formattedValue = cleanedValue;
        if (cleanedValue.length > 2) {
            formattedValue = `${cleanedValue.slice(0,2)}/${cleanedValue.slice(2,4)}`;
        }
        setPurchaseFormData(prevState => ({ ...prevState, [name]: formattedValue.slice(0,5) }));
    } else if (name === "cvc") {
        setPurchaseFormData(prevState => ({ ...prevState, [name]: value.replace(/\D/g, '').slice(0,3) }));
    }
     else {
        setPurchaseFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleDistributorChange = (e) => {
    const { name, value } = e.target;
    setDistributorFormData(prevState => ({ ...prevState, [name]: value, }));
  };

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del Pedido:', purchaseFormData);
    alert('¡Pedido procesado! (Esto es una demostración, los datos se mostraron en la consola)');
    setPurchaseFormData({
      product: 'Loción Capilar Verasol', quantity: 1, fullName: '',
      shippingAddress: '', email: '', phone: '',
      cardNumber: '', expiryDate: '', cvc: '',
    });
  };

  const handleDistributorSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de Consulta Distribuidor:', distributorFormData);
    alert('¡Consulta recibida! (Esto es una demostración, los datos se mostraron en la consola)');
    setDistributorFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <Container className={styles.wideContainer}> 
        <div className={styles.formsLayoutContainer}>
          {/* Columna 1: Formulario de Compra Directa */}
          <div className={styles.formColumn}>
            <div className={styles.formColumnContent}>
              <h3 className={styles.subSectionTitle}>Compra Directa Verasol</h3>
              <p className={styles.subSectionIntro}>
                Adquiere tu Loción Capilar Verasol y recíbela directamente en tu hogar.
              </p>
              <form className={styles.contactForm} onSubmit={handlePurchaseSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="product" className={styles.formLabel}>Producto</label>
                    <input type="text" id="product" name="product" className={styles.formInput} value={purchaseFormData.product} readOnly />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="quantity" className={styles.formLabel}>Cantidad</label>
                    <input type="number" id="quantity" name="quantity" className={styles.formInput} value={purchaseFormData.quantity} onChange={handlePurchaseChange} min="1" required />
                  </div>
                </div>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName" className={styles.formLabel}>Nombre Completo</label>
                        <input type="text" id="fullName" name="fullName" className={styles.formInput} value={purchaseFormData.fullName} onChange={handlePurchaseChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="pEmail" className={styles.formLabel}>Correo Electrónico</label>
                        <input type="email" id="pEmail" name="email" className={styles.formInput} value={purchaseFormData.email} onChange={handlePurchaseChange} required />
                    </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="shippingAddress" className={styles.formLabel}>Dirección de Envío</label>
                  <textarea id="shippingAddress" name="shippingAddress" className={styles.formTextarea} rows="2" value={purchaseFormData.shippingAddress} onChange={handlePurchaseChange} required></textarea> {/* rows de 3 a 2 */}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Teléfono (Opcional)</label>
                    <input type="tel" id="phone" name="phone" className={styles.formInput} value={purchaseFormData.phone} onChange={handlePurchaseChange} />
                </div>
                <div className={styles.paymentSectionTitle}>Información de Pago</div>
                <div className={styles.formGroup}>
                  <label htmlFor="cardNumber" className={styles.formLabel}>Número de Tarjeta</label>
                  <input type="text" id="cardNumber" name="cardNumber" className={`${styles.formInput} ${styles.cardInput}`} value={purchaseFormData.cardNumber} onChange={handlePurchaseChange} placeholder="0000 0000 0000 0000" maxLength="19" required />
                </div>
                <div className={styles.paymentRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="expiryDate" className={styles.formLabel}>Expira (MM/AA)</label>
                    <input type="text" id="expiryDate" name="expiryDate" className={`${styles.formInput} ${styles.expiryInput}`} value={purchaseFormData.expiryDate} onChange={handlePurchaseChange} placeholder="MM/AA" maxLength="5" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="cvc" className={styles.formLabel}>CVC</label>
                    <input type="text" id="cvc" name="cvc" className={`${styles.formInput} ${styles.cvcInput}`} value={purchaseFormData.cvc} onChange={handlePurchaseChange} placeholder="123" maxLength="3" required />
                  </div>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Pagar y Realizar Pedido
                </button>
              </form>
            </div>
          </div>

          {/* Columna 2: Formulario de Contacto para Distribuidores */}
          <div className={styles.formColumn}>
            <div className={styles.formColumnContent}>
              <h3 className={styles.subSectionTitle}>Atención Personalizada y Distribuidores</h3>
              <p className={styles.subSectionIntro}>
                ¿Interesado en distribuir Verasol o necesitas una atención más detallada? Déjanos tu mensaje.
              </p>
              <form className={styles.contactForm} onSubmit={handleDistributorSubmit}>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="distributorName" className={styles.formLabel}>Nombre Completo o Empresa</label>
                        <input type="text" id="distributorName" name="name" className={styles.formInput} value={distributorFormData.name} onChange={handleDistributorChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="distributorEmail" className={styles.formLabel}>Correo Electrónico</label>
                        <input type="email" id="distributorEmail" name="email" className={styles.formInput} value={distributorFormData.email} onChange={handleDistributorChange} required />
                    </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="distributorMessage" className={styles.formLabel}>Tu Mensaje</label>
                  <textarea id="distributorMessage" name="message" className={styles.formTextarea} rows="4" value={distributorFormData.message} onChange={handleDistributorChange} required></textarea> {/* rows de 5 a 4 */}
                </div>
                <button type="submit" className={styles.submitButton}>
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;