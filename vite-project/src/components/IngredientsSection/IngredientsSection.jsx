import React from 'react';
import Container from '../UI/Container/Container';
import styles from './IngredientsSection.module.css';

const ingredients = [
  { id: 'aloe', name: 'Aloe Vera' },
  { id: 'romero', name: 'Romero' },
  { id: 'canela', name: 'Canela' },
  { id: 'jengibre', name: 'Jengibre' },
  { id: 'vitaminae', name: 'Vitamina E' },
];

const IngredientsSection = () => {
  return (
    <section id="ingredientes" className={styles.ingredientsSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Ingredientes Estrella</h2>
        <p className={styles.sectionIntro}>
          Nuestra fórmula única combina ingredientes naturales cuidadosamente seleccionados para revitalizar tu cabello desde la raíz hasta las puntas:
        </p>
        <div className={styles.ingredientsGrid}>
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className={styles.ingredientCard}>
              <div className={styles.cardContent}>
                <h3>{ingredient.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IngredientsSection;