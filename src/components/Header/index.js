import React, { useState } from 'react';
import { Link, BrowserRouter } from "react-router-dom";
import { Menu } from 'antd';
import './styles.css';

const Header = () => {
    const [current, setCurrent] = useState('list-drivers');

    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }

    return (
        <header id="header">
            <BrowserRouter>
                <Menu
                    onClick={handleClick} 
                    selectedKeys={[current]}
                    mode="horizontal" 
                    theme="light"
                >
                    <Menu.Item key="list-drivers">
                        Visualizar motoristas
                        <Link to="/listagem-de-motoristas" />
                    </Menu.Item>

                    <Menu.Item key="new-driver">
                        Adicionar motorista
                        <Link to="/novo-motorista" />
                    </Menu.Item>
                </Menu>
            </BrowserRouter>
        </header>
    );
}

export default Header;
