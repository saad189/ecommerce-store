import Link from "next/link";
import styles from './Main.module.css';

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.bannerStyle}>
        <h1 className={styles.title}>Welcome to the Store!</h1>
        <h2 className={styles.subtitle}>Discover the Most Amazing Household Products!</h2>
      </section>

      <section className={styles.shoppingStyle}>
        <h1 className={styles.title}>Let&apos;s Start Shopping!</h1>
        <div className={styles.shopLink}>
          <Link href='/products/listings'>
            Shop Now!
          </Link>
        </div>
      </section>
    </main>
  );
}
