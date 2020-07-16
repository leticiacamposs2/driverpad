import React from 'react';
import error404 from '../../assets/imgs/error404.svg';
import './styles.css';

const NotFound = () => {

    return (
        <div class="box">
            <h1>Ops...</h1>
            <h2>página não encontrada!</h2>
            <img src={error404} alt="pagina não encontrada" height={400}/>
        </div>
    );
};

export default NotFound;
