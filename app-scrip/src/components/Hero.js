import styles from './Hero.module.css';
export default function Hero(){
    return (
        <section className={styles.hero}>
            <h2 className={styles.title}>DISCOVER OUR PRODUCTS</h2>
            <p className={styles.subtitle}>
                Explore thousands of curated products across fashion, electronics, jewellery and more.
            </p>
        </section>
    );
}