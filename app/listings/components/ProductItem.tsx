import React from 'react';
import { Product } from '@/app/common/interfaces/product';
import styles from './ProductItem.module.css';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={styles.productContainerCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
      </div>
      <div className={styles.descriptionContainer} >
        <div className={styles.description}>{product.description}</div>
      </div>


      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.footer}>
        <p className={styles.rating}>Rating: {product.rating.rate} / 5</p>
        <button className={styles.addButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
