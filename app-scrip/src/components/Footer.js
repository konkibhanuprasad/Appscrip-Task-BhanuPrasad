import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <h3 className={styles.colTitle}>BE THE FIRST TO KNOW</h3>
                    <p className={styles.colText}>Sign up for updates form metta muse.</p>
                    <div className={styles.subscribe}>
                        <input
                        type="email"
                        placeholder="Enter your Email.."
                        className={styles.input}
                        aria-label="Email for newsLetter"
                        />
                        <button className={styles.btn}>SUBSCRIBE</button>
                    </div>
                </div>

                <div className={styles.col}>
                    <h3 className={styles.colTitle}>QUICK LINKS</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#"> Orders & Shipping</a></li>
                        <li><a href="#"> Join / Login as Seller </a></li>
                        <li><a href="#"> Payment & Pricing</a></li>
                        <li><a href="#"> Return & Refunds</a></li>
                        <li><a href="#"> FAQs</a></li>
                        <li><a href="#"> Privacy Policy</a></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h3 className={styles.colTitle}>FOLLOW US</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>Copyright 2026 metta muse. All rights reserved</p>
            </div>
        </footer>
    )
}