import React from 'react';
import { Link } from 'react-router-dom';

// Functions
import { shorten} from '../../helper/functions';

// Style
import styles from "./Product.module.css";

const Product = ({productData}) => {
    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/receipt/${productData.id}`}>Details</Link>
            </div>
        </div>
    );
};

export default Product;