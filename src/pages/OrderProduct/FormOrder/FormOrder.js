// import Select from '../form/Select';
import Input from '../../../components/layout/FormItems/Input';
import SubmitButton from '../../../components/layout/FormItems/SubmitButton';
import styles from './FormOrder.module.css';

// import { useEffect, useState } from 'react';

export default function FormOrder({ btnText, handleSubmit, projectData }) {

    // const [categories, setCategories] = useState([]);
    // const [project, setProject] = useState(projectData || {});

    // useEffect(() => {
    //     fetch("http://localhost:5000/categories", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then((response) => response.json()).then((data) => setCategories(data))
    //         .catch(err => console.log(err))
    // }, [])

    // const submit = (e: any) => {
    //     e.preventDefault();
    //     // console.log(project)
    //     handleSubmit(project)
    // }

    // function handleChange(e: any) {
    //     setProject({ ...project, [e.target.name]: e.target.value });
    // }

    // function handleSelect(e: any) {
    //     setProject({
    //         ...project, category: {
    //             id: e.target.value,
    //             name: e.target.options[e.target.selectedIndex].text
    //         }
    //     });
    // }

    function submit() { }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome" name="name" placeholder="Informe seu Nome" />
            <Input type="text" text="Endereço" name="name" placeholder="Informe sua Rua, Ex: Avenida Rosa, N° 98" />
            <Input type="tel" text="Telefone" name="budget" placeholder="Insira seu Número de celular" />
            {/* <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleSelect} value={project.category ? project.category.id : ''} /> */}
            <SubmitButton text={btnText} />
        </form>
    )
}