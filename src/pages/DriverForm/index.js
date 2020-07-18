import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, notification } from 'antd';
import { Formik } from 'formik';
import moment from 'moment';
import { dateFormat} from '../../components/FieldFormats';
import DisplayDriverForm from '../../components/DisplayDriverForm';

const DriverForm = () => {

    let { id } = useParams();
    const [driver, setDriver] = useState({});
    const [loading, setLoading] = useState(true);

    const initialValues = {
        name: "",
        phone: "",
        birth: moment(Date.now()),
        cnh: "",
        typeOfCnh: "",
        selectOptions: ["A", "B", "C", "D"],
        cpf: ""
    };

    const handleSubmit = (formProps) => {
        const { name, phone, birth, cnh, typeOfCnh, cpf } = formProps;
        const selectedDate = moment(birth).format(dateFormat);

        fetch(`/drivers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "name": name,
                    "phone": phone,
                    "birth": selectedDate,
                    "cnh": cnh,
                    "typeOfCnh": typeOfCnh,
                    "cpf": cpf,
                    "active": true,
                }
            )
        })

        openNotification();
    };

    const openNotification = () => {
        notification.open({
            message: 'Motorista cadastrado com sucesso!',
        });
    };

    useEffect(() => {
        id ?
            fetch(`/drivers/${id}`)
                .then(res => res.json())
                .then(res => {
                    res.birth = moment(res.birth, "DD/MM/YYYY")
                    setDriver(res)
                })
                .catch(err => console.error(err, 'Nenhum motorista encontrado'))
                .finally(() => setLoading(false))
        :
            setLoading(false)
    }, [id])

    return(
        <>
        <h1>Motorista</h1>
        {loading ?
            <div className="loading-drivers">
                <Spin size="large" tip={
                    id ? 'Buscando motorista...' : 'Preparando formulário...' } 
                />
            </div>
            :   
            <Formik
                initialValues={id ? driver : initialValues}
                onSubmit={handleSubmit}
                render={DisplayDriverForm}
            />
        }
        </>
    );
}

export default DriverForm;
