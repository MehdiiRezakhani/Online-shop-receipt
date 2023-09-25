import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./Receipt.module.css";

const Receipt = () => {

    const products = useContext(ProductsContext)
    const totalpayments = products.slice(0,6).reduce((total, product) => total + product.price, 0).toFixed(2);

    return (
        <div className={styles.container} >
            {
                products.slice(0,6).map(product => <Product 
                        key={product.id} 
                        productData = {product}
                    />)
            }
            <p style={{color:'red', margin:'10px auto 50px'}}>Total Payments: {totalpayments}</p>
        </div>
    );
};

export default Receipt;