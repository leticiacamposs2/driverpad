import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListDrivers from './pages/ListDrivers';
import DriverForm from './pages/DriverForm';
import NotFound from './pages/NotFound';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListDrivers} />
                <Route path="/listagem-de-motoristas" component={ListDrivers} />
                <Route path="/novo-motorista" component={DriverForm} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;