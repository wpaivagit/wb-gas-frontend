import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

export default function ProductItem({ productTitle, productDescription, productValue }) {

    const linkStyle = {
        textDecoration: "none", margin: "0 ", padding: "0"
    };




    return (
        <Link to="/orderproduct" style={linkStyle} state={
            { productTitle: productTitle, productValue: productValue }
        } >
            <div className={styles.productContainer}>
                <p className={styles.productTitle}  >{productTitle}</p>

                <p className={styles.productDescription}>{productDescription}</p>

                <p className={styles.productValue}>Valor R$: {productValue}</p>
            </div>
        </Link >

    )
}