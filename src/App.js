import React from 'react';
import Routes  from './routes';
import { Layout } from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './assets/imgs/logo.svg';
import logoname from './assets/imgs/logoName.svg';
import './App.css';

const { Content } = Layout;

const App = () => (
  <>
    <Header logo={logo} alt="logo DriverPad" logoname={logoname} />
    <Content style={{ margin: '24px 16px 0' }}>
      <Routes/>
    </Content>
    <Footer author="Leticia Campos" year="2020" />
  </>
);

export default App;
