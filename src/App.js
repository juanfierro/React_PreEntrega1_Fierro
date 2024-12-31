import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <br></br>
            <ItemListContainer greeting="¡Bienvenido a MiBouquet!" />
        </div>
    );
}

export default App;
