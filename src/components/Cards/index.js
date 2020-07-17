import React from 'react';
import { Card, Tag } from 'antd';
import { EditOutlined, UserAddOutlined } from '@ant-design/icons';
import './styles.css';

const Cards = ({ name, phone, birth, cnh, typeOfCnh, cpf, active, color }) => {

    return (
        <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}
                actions={[
                    <EditOutlined key="edit"/>,
                    <UserAddOutlined key="user"/>,
                ]}>
                <h1>{name}</h1>
                <p>{phone}</p>
                <p>{birth}</p>
                <p>{cnh} {typeOfCnh}</p>
                <p>{cpf} <Tag color={color}>{active}</Tag></p>
            </Card>
        </div>
    );
};

export default Cards;
