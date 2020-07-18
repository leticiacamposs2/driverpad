import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './styles.css';

const Header = () => {
    return (
        <header id="header">
            <BrowserRouter forceRefresh={true}>
                <Menu
                    mode="horizontal" 
                    theme="light"
                >
                    <Menu.Item key="list-drivers">
                        Visualizar motoristas
                        <Link to="/listagem-de-motoristas" />
                    </Menu.Item>

                    <Menu.Item key="new-driver">
                        Adicionar motorista
                        <Link to="/cadastro-de-motorista" />
                    </Menu.Item>
                </Menu>
            </BrowserRouter>
        </header>
    );
}

export default Header;
