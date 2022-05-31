import ProductItem from './components/ProductItem/ProductItem';
import styles from './Products.module.css';
// import LinkButton from '../../components/layout/LinkButton/LinkButton';

export default function Products() {

    const products = [
        {
            title: "Gás Comercial 13kg",
            description: "W.B. Gás Nobre LTDA",
            value: "94.00"
        },
        {
            title: "Gás Doméstico 4kg",
            description: "W.B. Gás Nobre LTDA",
            value: "54.00"
        },
        {
            title: "Gás Doméstico 6kg",
            description: "W.B. Gás Nobre LTDA",
            value: "65.00"
        },
        {
            title: "Gás Comercial 15kg",
            description: "W.B. Gás Nobre LTDA",
            value: "114.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
        {
            title: "Gás Comercial 20kg",
            description: "W.B. Gás Nobre LTDA",
            value: "130.00"
        },
    ]

    return (
        <>
            <h1 className={styles.pageTitle}>Produtos</h1>
            <div className={styles.productsContainer}>
                {
                    products.map((e) => ProductItem(
                        { productTitle: e.title, productDescription: e.description, productValue: e.value }
                    ))
                }
            </div>
        </>
    );
}