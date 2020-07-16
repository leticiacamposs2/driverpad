import React from 'react';
import { Card } from 'antd';
import './styles.css';

const Cards = ({ name, phone, birth, cnh, typeOfCnh, cpf, active, key }) => {

    return (
        <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
                <h1>{name}</h1>
                <p>{phone}</p>
                <p>{birth}</p>
                <p>{cnh} {typeOfCnh}</p>
                <p>{cpf} {active}</p>
            </Card>
        </div>
    );
};

export default Cards;
