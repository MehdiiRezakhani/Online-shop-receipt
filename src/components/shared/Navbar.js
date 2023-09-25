import React from 'react';
import { Link } from 'react-router-dom';

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/receipt">Receipt</Link>
            </div>
        </div>
    );
};

export default Navbar;