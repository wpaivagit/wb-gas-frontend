import { Link } from 'react-router-dom';
import Container from '../Container';
import { FaArtstation } from 'react-icons/fa';

import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" ><FaArtstation className={styles.logo} /> </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" >Home</Link>
                    </li>
                    {/* <li className={styles.item}>
                        <Link to="/projects" >Produtos</Link>
                    </li> */}
                    <li className={styles.item}>
                        <Link to="/company" >Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact" >Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}