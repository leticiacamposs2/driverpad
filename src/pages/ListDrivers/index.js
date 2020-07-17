import React, { useState, useEffect } from 'react';
import { Switch, Spin, Row } from 'antd';
import SearchDriver from '../../components/SearchDriver';
import Cards from '../../components/Cards';
import './styles.css';

const ListDrivers = () => {
    const [checked, setChecked] = useState(true);
    const [drivers, setDrivers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/drivers`)
            .then(res => res.json())
            .then(res => setDrivers(res))
            .catch(err => console.error(err, 'Nenhum motorista encontrado'))
            .finally(() => setLoading(false))
    }, [])

    const onChange = (checked) => {
        setChecked(checked);
        console.log(`Ativo? ${checked}`);
    }

    return (
        <section className="list-drivers">
            <Row className="align-itens">
                    <SearchDriver placeholder="Pesquise um motorista pelo nome"/>
                    <Row>
                        Listar motoristas ativos {" "}
                    <Switch checked={checked} onChange={onChange} />
                    </Row>
            </Row>
            {loading ? 
                <div className="loading-drivers">
                    <Spin size="large" tip="Buscando motoristas..."/> 
                </div>
            :   <Row>
                    {drivers.map(driver => (
                        <Cards
                            key={driver.id}
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
                }              
        </section>
    );
};

export default ListDrivers;
