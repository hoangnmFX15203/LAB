import { Navbar, NavbarBrand } from 'reactstrap';
import Main from '~/component/MainComponent';
import React from 'react';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import Component from '~/newFolder/labComponent';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Component />
            </div>
        </BrowserRouter>
    );
}

export default App;
