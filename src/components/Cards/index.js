import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Tooltip, Card, Tag } from 'antd';
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
                            <Tooltip placement="topLeft" title="Editar este cadastro">
                                <EditOutlined key="edit"/>
                            </Tooltip>
                        </Link>,
                        <Link to="/cadastro-de-motorista">
                            <Tooltip placement="topLeft" title="Novo cadastro">
                                <UserAddOutlined key="user"/>
                            </Tooltip>
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
