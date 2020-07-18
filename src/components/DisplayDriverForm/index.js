import React from 'react';
import { Col, Row } from 'antd';
import { Form, Field } from 'formik';
import {
    AntDatePicker,
    AntInput,
    AntSelect
} from '../CreateAntFields';
import { dateFormat } from '../FieldFormats';
import {
    validateDate,
    isRequired
} from '../ValidateFields';

const DisplayDriverForm = ({ handleSubmit, values, submitCount }) => (
    <Col>
        <Form className="form-container" onSubmit={handleSubmit}>
            <Field
                component={AntInput}
                name="name"
                type="name"
                label="Nome"
                validate={isRequired}
                submitCount={submitCount}
                hasFeedback
            />
            <Field
                component={AntInput}
                name="phone"
                type="phone"
                label="Telefone"
                validate={isRequired}
                submitCount={submitCount}
                maxLength={14}
                hasFeedback
            />
            <Row>
                <Field
                    component={AntDatePicker}
                    name="birthDate"
                    label="Nascimento"
                    defaultValue={values.birthDate}
                    format={dateFormat}
                    validate={validateDate}
                    submitCount={submitCount}
                    hasFeedback
                />
                <Field
                    component={AntInput}
                    name="cnh"
                    type="cnh"
                    label="CNH"
                    validate={isRequired}
                    submitCount={submitCount}
                    maxLength={25}
                    style={{ width: 200 }}
                    hasFeedback
                />
                <Field
                    component={AntSelect}
                    name="typeOfCnh"
                    label="Tipo de CNH:"
                    defaultValue={values.typeOfCnh}
                    selectOptions={values.selectOptions}
                    validate={isRequired}
                    submitCount={submitCount}
                    tokenSeparators={[","]}
                    style={{ width: 200 }}
                    hasFeedback
                />
                <Field
                    component={AntInput}
                    name="cpf"
                    type="cpf"
                    label="CPF"
                    validate={isRequired}
                    submitCount={submitCount}
                    maxLength={25}
                    style={{ width: 200 }}
                    hasFeedback
                />
            </Row>
            <div className="submit-container">
                <button className="ant-btn ant-btn-primary" type="submit">
                    Salvar
                </button>
            </div>
        </Form>
    </Col>
);

export default DisplayDriverForm;
