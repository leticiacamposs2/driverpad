import React from 'react';
import { notification } from 'antd';
import { Formik } from 'formik';
import moment from 'moment';
import { dateFormat} from '../../components/FieldFormats';
import DisplayDriverForm from '../../components/DisplayDriverForm';

const DriverForm = () => {
    const initialValues = {
        name: "",
        phone: "",
        birthDate: moment(Date.now()),
        cnh: "",
        typeOfCnh: "",
        selectOptions: ["A", "B", "C", "D"],
        cpf: ""
    };

    const handleSubmit = (formProps) => {
        const { name, phone, birthDate, cnh, typeOfCnh, cpf } = formProps;
        const selectedDate = moment(birthDate).format(dateFormat);

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
                    "birthDate": selectedDate,
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

    return(
        <>
        <h1>Motorista</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={DisplayDriverForm}
        />
        </>
    );
}

export default DriverForm;
