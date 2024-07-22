'use client'
import Link from 'next/link';
import React, { useTransition } from 'react'
import styles from './Header.module.css';
import { getCartItems } from '../hooks/useCart';
const Header = () => {
    let [_, startTransition] = useTransition();
    let cartItems = getCartItems();
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" className={styles.image}>
                    <img src="/store-logo.png" alt="Logo" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/listings">
                            Shop
                        </Link>
                    </li>

                </ul>
            </nav>
            <div className={styles.cart}>
                <Link href="/cart">
                    <img src="/cart.png" alt="Cart" />
                    <span className={styles.cartCount}>{cartItems.length}</span>

                </Link>
            </div>
        </header>
    );
}

export default Header