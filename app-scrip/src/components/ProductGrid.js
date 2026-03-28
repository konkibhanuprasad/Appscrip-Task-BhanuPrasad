import ProductCard from "./ProductCard";
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products}){
    if(!products || products.length === 0){
        return <p className={styles.empty}> No Products found.</p>
    }

    return (
        <section aria-label="Product listening">
            <p className={styles.count}>{products.length} Items</p>
            <div className={styles.grid}>
                {products.map((product) => (
                    <ProductCard key = {product.id} product={product}/>
                ))}
            </div>
        </section>
    );
}