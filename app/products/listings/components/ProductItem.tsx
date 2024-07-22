import React from 'react';
import { Product } from '@/app/common/interfaces/product';
import styles from './ProductItem.module.css';
import Link from 'next/link';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const id = product.id;
  const route = `/products/details/${encodeURIComponent(id)}`;

  return (
    <Link href={route}>
      <div className={styles.productContainerCard}>
        <div className={styles.header}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
        </div>
        {/* <div className={styles.descriptionContainer} >
          <div className={styles.description}>{product.description}</div>
        </div> */}


        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </div>
        <div className={styles.footer}>
          <p className={styles.rating}>Rating: {product.rating.rate} / 5</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
