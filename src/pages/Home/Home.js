import styles from './Home.module.css';
import LinkButton from '../../components/layout/LinkButton/LinkButton';

export default function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Bem-vindo à <span>WB Gás Nobre</span></h1>
            <p>Compre o seu Gás Nobre conosco.</p>
            <LinkButton to="/produtos" text="Conhecer Produtos" />
            {/* <img src={savings} alt="Costs" /> */}
        </section>
    );
}