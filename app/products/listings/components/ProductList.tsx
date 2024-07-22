import React from 'react'
import { Product } from '../../../common/interfaces/product';
import ProductItem from './ProductItem';
import styles from './ProductList.module.css';



const ProductList = async () => {
    let productList: Product[] = [];
    let loading = false;
    try {
        loading = true;
        const response: any = await fetch('https://fakestoreapi.com/products');

        productList = await response.json();

    } catch (error: any) {
        console.log('Error Fetching Product List', error.message)
    } finally {
        loading = false;
    }




    return (
        <div>
            <ul className={styles.listContainer}>
                {productList.map(item =>
                    <ProductItem key={item.id} product={item}></ProductItem>
                )}
            </ul>
        </div>
    )
}

export default ProductList