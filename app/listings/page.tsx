import React from 'react'
import ProductList from './components/ProductList'
import styles from './Listings.module.css';

const ListingsPage = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Shop Now</h1>
            <ProductList></ProductList>
        </div>

    )
}

export default ListingsPage