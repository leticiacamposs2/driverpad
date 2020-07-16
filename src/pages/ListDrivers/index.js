import React from 'react';
import SearchDriver from '../../components/SearchDriver';
import Cards from '../../components/Cards';
import { Switch, Row } from 'antd';

const ListDrivers = () => {

    const driver = {
        name: 'Leticia',
        phone: '(11) 9748-7744',
        birth: '22/09/1994',
        cnh: '411.778.457.444',
        typeOfCnh: 'B',
        cpf: '441.445.695-10', 
        active: 'true',
    }

    const onChange = (checked) => {
        console.log(`Ativo? ${checked}`);
    }

    return (
        <section className="list-drivers">
            <Row>
                <SearchDriver placeholder="Pesquise um motorista pelo nome"/>
                {" "} Listar motoristas inativos? {" "}
                <Switch defaultChecked onChange={onChange} />
            </Row>
            <Row>
                <Cards 
                    name={driver.name}
                    phone={`Telefone: ${driver.phone}`} 
                    birth={`Nascimento: ${driver.birth}`}
                    cnh={`CNH: ${driver.cnh}`}
                    typeOfCnh={`Tipo: ${driver.typeOfCnh}`}
                    cpf={`CPF: ${driver.cpf}`}
                    active={`Ativo: ${driver.active}`}
                />

                <Cards
                    name={driver.name}
                    phone={`Telefone: ${driver.phone}`}
                    birth={`Nascimento: ${driver.birth}`}
                    cnh={`CNH: ${driver.cnh}`}
                    typeOfCnh={`Tipo: ${driver.typeOfCnh}`}
                    cpf={`CPF: ${driver.cpf}`}
                    active={`Ativo: ${driver.active}`}
                />

                <Cards
                    name={driver.name}
                    phone={`Telefone: ${driver.phone}`}
                    birth={`Nascimento: ${driver.birth}`}
                    cnh={`CNH: ${driver.cnh}`}
                    typeOfCnh={`Tipo: ${driver.typeOfCnh}`}
                    cpf={`CPF: ${driver.cpf}`}
                    active={`Ativo: ${driver.active}`}
                />

                <Cards
                    name={driver.name}
                    phone={`Telefone: ${driver.phone}`}
                    birth={`Nascimento: ${driver.birth}`}
                    cnh={`CNH: ${driver.cnh}`}
                    typeOfCnh={`Tipo: ${driver.typeOfCnh}`}
                    cpf={`CPF: ${driver.cpf}`}
                    active={`Ativo: ${driver.active}`}
                />                
            </Row>
        </section>
    );
};

export default ListDrivers;
