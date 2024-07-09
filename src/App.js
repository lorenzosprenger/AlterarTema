import React, { useContext } from 'react';
import { ContextoTema } from './components/tema';
import './App.css';

function App() {
    const { tema, alternarTema } = useContext(ContextoTema);

    return (
        <div className={`app ${tema}`}>
            <header className="app-header">
                <h1>Tema da Aplicação: {tema}</h1>
                <button onClick={alternarTema}>Alternar Tema</button>
            </header>
        </div>
    );
}

export default App;