import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <strong>MiBouquet</strong>
                </a>
            </div>


            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/catalogo">Catálogo</a>
                    <a className="navbar-item" href="/sobre-nosotros">Sobre Nosotros</a>
                    <a className="navbar-item" href="/contacto">Contacto</a>
                </div>


                <div className="navbar-end">
                    <div className="navbar-item">
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
