import React, { createContext, useState } from 'react';

export const ContextoTema = createContext();

const ProvedorTema = ({ children }) => {
    const [tema, setTema] = useState('claro');

    const alternarTema = () => {
        setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
    };

    return (
        <ContextoTema.Provider value={{ tema, alternarTema }}>
            {children}
        </ContextoTema.Provider>
    );
};

export default ProvedorTema;
