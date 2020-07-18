import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Card, Tag } from 'antd';
import { EditOutlined, UserAddOutlined } from '@ant-design/icons';
import './styles.css';

const Cards = ({ id, name, phone, birth, cnh, typeOfCnh, cpf, active, color }) => {

    return (
        <div className="site-card-border-less-wrapper">
            <BrowserRouter forceRefresh={true}>
                <Card 
                    bordered={false} 
                    style={{ width: 300 }}
                    actions={[
                        <Link to={`/editar-motorista/${id}`}>
                            <EditOutlined key="edit"/>
                        </Link>,
                        <Link to="/cadastro-de-motorista">
                            <UserAddOutlined key="user"/>
                        </Link>
                    ]}>
                    <h1>{name}</h1>
                    <p>{phone}</p>
                    <p>{birth}</p>
                    <p>{cnh} {typeOfCnh}</p>
                    <p>{cpf} <Tag color={color}>{active}</Tag></p>
                </Card>
            </BrowserRouter>
        </div>
    );
};

export default Cards;
