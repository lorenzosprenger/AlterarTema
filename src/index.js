import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProvedorTema from './components/tema';

ReactDOM.render(
    <React.StrictMode>
        <ProvedorTema>
            <App />
        </ProvedorTema>
    </React.StrictMode>,
    document.getElementById('root')
);
