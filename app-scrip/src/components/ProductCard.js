import Image from "next/image";
import { useState } from "react";
import styles from './ProductCard.module.css';

export default function ProductCard({ product }){
 const [wished, setWished] = useState(false);

 const stars = Math.round(product.rating.rate);

 return (
    <article className={styles.card}>
        <div className={styles.imageWrapper}>
            <Image 
            src={product.image}
            alt={`${product.title} - product image`}
            fill
            sizes="(max-width:769px) 50vvw, 25vw"
            className={styles.image}
            />
            <button
             className={styles.wishBtn}
             onClick={() => setWished(!wished)}
             aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
             >
                {wished ? '♥': '♡'}
             </button>
        </div>

        <div className={styles.info}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.category}>{product.category}</p>
            <div className={styles.button}>
                <span className={styles.price}>₹{product.price}</span>
                <span className={styles.stars}>{'★'.repeat(stars)}{'☆'.repeat(5-stars)}
                    <span className={styles.ratingCount}>({product.rating.count})</span>
                </span>
            </div>
        </div>
    </article>
 );
}