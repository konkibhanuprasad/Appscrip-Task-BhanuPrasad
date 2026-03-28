import { useState } from "react";
import styles from './Filters.module.css';

const CATEGORIES = [
    "men's clothings",
    "women's clothings",
    "jewelery",
    "electronics",
];

export default function Filters({ selectedCategory, onCategoryChange}){
    const[open, setOpen] = useState(true);

    return(
        <aside className={styles.sidebar}>
            <div className={styles.section}>
                <button 
                className={styles.sectonTitle}
                onClick={() => setOpen(!open)}
                aria-expanded ={open}
                >
                    <h2>CATEGORY</h2>
                    <span>{open ? '-' : '+'}</span>
                </button>

                {open && (
                    <ul className={styles.categoryList}>
                     <li>
                        <label className={styles.filterItem}>
                            <input
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ''}
                            onChange={() => onCategoryChange('')}
                            />
                            <span>All Products</span>
                        </label>
                    </li>
                    {CATEGORIES.map((cat) => (
                        <li key={cat}>
                            <label className={styles.filterItem}>
                            <input
                            type="radio"
                            name="category"
                            value={cat}
                            checked={selectedCategory === cat}
                            onChange={() => onCategoryChange(cat)}
                            />
                            <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                            </label>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </aside>
    )
}