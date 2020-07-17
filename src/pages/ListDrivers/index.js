import React, { useState, useEffect } from 'react';
import { Select, Spin, Row } from 'antd';
import SearchDriver from '../../components/SearchDriver';
import Cards from '../../components/Cards';
import './styles.css';

const { Option } = Select;

const ListDrivers = () => {
    const [drivers, setDrivers] = useState({});
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState('both');

    useEffect(() => {
        fetch(`/drivers`)
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
            <Row className="align-itens">
                <SearchDriver placeholder="Pesquise um motorista pelo nome" />
                <Row>
                    Filtrar motoristas: {" "}
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        optionFilterProp="children"
                        onChange={(value) => {
                            setSelected(value)
                            console.log('selected', selected);
                        }}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="both">Ambos</Option>
                        <Option value="active">Ativo</Option>
                        <Option value="inactive">Inativo</Option>
                    </Select>
                </Row>
            </Row>
            <Row>
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
            </>
            }              
        </section>
    );
};

export default ListDrivers;
