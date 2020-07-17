import React from 'react';
import { Col, Row, Button } from 'antd';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../components/MyTextInput';
import MyCheckbox from '../../components/MyCheckbox';
import MySelect from '../../components/MySelect';

const NewDriver = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return (
        <>
        <h1>Motorista</h1>
        <Formik
            initialValues={{
                name: '',
                phone: '',
                birth: '',
                cnh: 0,
                typeOfCnh: '',
                cpf: 0,
                active: true,
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Deve ter 15 caracteres ou menos')
                    .required('Obrigatório'),
                phone: Yup.string()
                    .matches(phoneRegExp, 'Informe um telefone válido')
                    .required('Obrigatório'),
                birth: Yup.date()
                    .nullable()
                    .min(new Date(1900, 0, 1))
                    .required('Obrigatório'),
                cnh: Yup.number()
                    .min(10)
                    .required('Obrigatório'),
                typeOfCnh: Yup.string()
                    .oneOf(
                        ['A', 'B', 'C', 'D'],
                        'Tipo inválido'
                    )
                    .required('Obrigatório'),
                active: Yup.boolean()
                    .oneOf([true], ''),
            })}
        >
            <Form>
                <Row>
                    <MyTextInput
                        label="Nome"
                        name="name"
                        type="text"
                        placeholder="Nome do motorista"
                    />
                </Row>
                <Row>
                    <Col md={12}>
                        <MyTextInput
                            label="Telefone"
                            name="phone"
                            type="text"
                            placeholder="(11) 9999-9999"
                        />
                    </Col>
                    <Col md={12}>
                        <MyTextInput
                            label="Data de nascimento"
                            name="birth"
                            type="date"
                        />
                    </Col>
                </Row>
                <Row>
                    <MyTextInput
                        label="CNH"
                        name="cnh"
                        type="number"
                    />
                </Row>
                <Row>
                    <Col md={12}>
                        <MySelect label="Tipo" name="typeOfCnh">
                            <option value="">Selecione o tipo</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </MySelect>
                    </Col>
                    <Col md={4}>
                        <MyCheckbox name="active">
                            Ativo? 
                        </MyCheckbox>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                {/* <button type="submit">Submit</button> */}
            </Form>
        </Formik>
        </>
    );
};

export default NewDriver;
