import { useState } from "react";
import styles from './Header.module.css';
export default function Header(){
    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <header className={styles.header}>
            <div className={styles.topBar}>
                <span>Lorem ipsum dolor</span>
                <div className={styles.topBarRight}>
                    <span>ENG</span>
                    <span>USD</span>
                </div>
            </div>

            <div className={styles.mainHeader}>
                <button className={styles.menuBtn}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu" > ☰ </button>
            </div>
            
            <h1 className={styles.logo}>Fake App</h1>

            <nav className={styles.icons}>
                <button aria-label="Search">🔍</button>
                <button aria-label="Wishlist">♡</button>
                <button aria-label="Cart">🛒</button>
                <button aria-label="Account">👤</button>
            </nav>

            <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                <a href="#">SHOP</a>
                <a href="#">SKILLS</a>
                <a href="#">STORIES</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT US</a>
            </nav>
        </header>
    )
}