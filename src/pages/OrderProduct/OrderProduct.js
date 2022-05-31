import FormOrder from './FormOrder/FormOrder';
import styles from './OrderProduct.module.css';
import { useLocation } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

export default function OrderProduct() {

    const location = useLocation()

    // const navigate = useNavigate();

    // function createPost(project: any) {

    //     project.cost = 0;
    //     project.services = [];

    //     fetch("http://localhost:5000/projects", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(project),
    //     }).then((response) => response.json()).then((data) => {
    //         navigate("/projects");
    //     })
    //         .catch(err => console.log(err))
    // }
    function sbmit() { }


    return (
        <div className={styles.newOrderContainer}>
            <h1 >Cadastre seu endereço</h1>
            <p>Informe seu endereço para realizarmos a entrega</p>
            <br />
            <p style={{ background: "darkslategrey", color: "white", textAlign: "center", padding: ".5em" }} >{location.state.productTitle} -  R$ {location.state.productValue} </p>
            <FormOrder btnText="Finalizar Pedido" handleSubmit={sbmit} />
        </div>
    )
}