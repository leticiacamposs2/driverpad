import React from 'react';
import Routes  from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './assets/imgs/logo.svg';
import logoname from './assets/imgs/logoName.svg';
import './App.css';

const App = () => (
  <>
    <Header logo={logo} alt="logo DriverPad" logoname={logoname} />
    <Routes/>
    <Footer author="Leticia Campos" year="2020" />
  </>
);

export default App;
