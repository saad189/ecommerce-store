import { Product } from '@/app/common/interfaces/product';
import styles from './DetailsPage.module.css';

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
    const product = await fetchProduct(params.id);

    return (
        <div className={styles.productDetailsContainer}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.description}>{product.description}</div>
            <img src={product.image} alt={product.title} className={styles.image} />
            <p className={styles.rating}>Rating: {product.rating.rate} / 5</p>
        </div>
    );
}
