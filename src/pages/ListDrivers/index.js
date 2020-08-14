import React, { useState, useEffect } from 'react';
import { Spin, Row } from 'antd';
import Cards from '../../components/Cards';
import './styles.css';

const ListDrivers = () => {
    const [drivers, setDrivers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/drivers'
            : 'colocar aqui o link do heroku';
        fetch(URL)
            .then(res => res.json())
            .then(res => setDrivers(res))
            .catch(err => console.error(err, 'Nenhum motorista encontrado'))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section className="list-drivers">
            {loading ? 
                <div className="loading-drivers">
                    <Spin size="large" tip="Buscando motoristas..."/> 
                </div>
            :
            <>
            <Row className="container">
                {drivers.map(driver => (
                    <Cards
                        key={driver.id}
                        id={driver.id}
                        name={driver.name}
                        phone={`Telefone: ${driver.phone}`}
                        birth={`Nascimento: ${driver.birth}`}
                        cnh={`CNH: ${driver.cnh}`}
                        typeOfCnh={`Tipo: ${driver.typeOfCnh}`}
                        cpf={`CPF: ${driver.cpf}`}
                        active={driver.active ? 'ativo' : 'inativo'}
                        color={driver.active ? 'green' : 'magenta'}
                    />
                ))}
            </Row>
            </>
            }              
        </section>
    );
};

export default ListDrivers;
