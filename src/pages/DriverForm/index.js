import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import DisplayDriverForm from '../../components/DisplayDriverForm';
import { dateFormat} from '../../components/FieldFormats';
import moment from 'moment';

const initialValues = {
    name: "",
    phone: "",
    birthDate: moment(Date.now()),
    cnh: "",
    typeOfCnh: "",
    selectOptions: ["A", "B", "C", "D"],
    cpf: ""
};

export default class DriverForm extends PureComponent {
    handleSubmit = formProps => {
        const { name, phone, birthDate, cnh, typeOfCnh, cpf } = formProps;
        const selectedDate = moment(birthDate).format(dateFormat);
        alert(`
            Nome: ${name}
            Telefone: ${phone}
            Nascimento: ${selectedDate}
            CNH: ${cnh}
            Tipo de CNH: ${typeOfCnh}
            CPF: ${cpf}`
        );
    };

    render = () => (
        <>
        <h1>Motorista</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
            render={DisplayDriverForm}
        />
        </>
    );
}
