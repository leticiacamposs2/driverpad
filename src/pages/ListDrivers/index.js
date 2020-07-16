import React, { useState } from 'react';
import { Switch, Row } from 'antd';
import SearchDriver from '../../components/SearchDriver';
import Cards from '../../components/Cards';
import './styles.css';

const ListDrivers = () => {
    const [checked, setChecked] = useState(true);

    const drivers = [
        {
            id: 1,
            name: 'Isabelle Olivia Viana',
            phone: '(11) 9748-7744',
            birth: '22/09/1994',
            cnh: 36139357657,
            typeOfCnh: 'B',
            cpf: '441.445.695-10', 
            active: false,
        },
        {
            id: 2,
            name: 'Bruna Clara Fabiana',
            phone: '(83) 2837-4629',
            birth: '22/04/1952',
            cnh: 78180800381,
            typeOfCnh: 'C',
            cpf: '894.149.688-81',
            active: false,
        },
        {
            id: 3,
            name: 'Roberto Breno Cardoso',
            phone: '(21) 2739-7727',
            birth: '27/01/1995',
            cnh: 58397370101,
            typeOfCnh: 'A',
            cpf: '700.883.748-82',
            active: true
        },
        {
            id: '4',
            name: 'Antonella Lorena Lúcia',
            phone: '(41) 3879-0696',
            birth: '25/08/1958',
            cnh: 78568771584,
            typeOfCnh: 'B',
            cpf: '018.319.908-14',
            active: true
        },
        {
            id: 5,
            name: 'Bárbara Renata Figueiredo',
            phone: '(54) 3837-1244',
            birth: '12/09/1956',
            cnh: 77172296491,
            typeOfCnh: 'A',
            cpf: '411.741.795-97',
            active: true
        }
    ];

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
            <Row>
                {drivers && drivers.map(driver => (
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
                    />))
                }
            </Row>
        </section>
    );
};

export default ListDrivers;
