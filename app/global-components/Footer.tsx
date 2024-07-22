import React from 'react'
import styles from './Footer.module.css';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <p className={styles.text}> © Ecommerce Store Company. All rights reserved.</p>

                <nav>
                    <ul >
                        <li className={styles.linkStyle}><Link href="/" >Home</Link></li>
                        <li className={styles.linkStyle}><Link href="/contact" >Contact</Link></li>
                        <li className={styles.linkStyle}><Link href="/privacy" >Privacy Policy</Link></li>
                    </ul>
                </nav>
            </div>


        </footer>
    )
}

export default Footer