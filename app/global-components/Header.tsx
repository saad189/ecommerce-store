import Link from 'next/link';
import React from 'react'
import styles from './Header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
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
                        <Link href="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.cart}>
                <Link href="/cart">
                    <img src="/store-logo.png" alt="Cart" />
                    <span className={styles.cartCount}>0</span>

                </Link>
            </div>
        </header>
    );
}

export default Header