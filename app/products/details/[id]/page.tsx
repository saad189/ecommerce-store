'use client'
import { Product } from '@/app/common/interfaces/product';
import styles from './DetailsPage.module.css';
import { CartItem } from '@/app/common/interfaces/cart';
import { useTransition } from 'react';
import { addItemToCart } from '@/app/hooks/useCart';


async function fetchProduct(id: string): Promise<Product> {
    let loading = false;
    try {
        loading = true;
        const product: Product = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())

        return product;

    } catch (error: any) {
        console.log('Error Fetching Product', error.message)
    } finally {
        loading = false;
    }

    return Promise.reject();
}

export default async function DetailsPage({ params }: { params: { id: string } }) {
    let [_, startTransition] = useTransition();
    const product = await fetchProduct(params.id);
    const cartItem: CartItem = { id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 };

    return (
        <div className={styles.productDetailsContainer}>

            <img src={product.image} alt={product.title} className={styles.image} />

            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>${product.price}</div>
            <div className={styles.rating}>Rating: {product.rating.rate} / 5</div>
            <button onClick={() => addItemToCart(cartItem)} className={styles.addButton}>Add to Cart</button>

            <div className={styles.description}>{product.description}</div>

        </div>
    );
}
