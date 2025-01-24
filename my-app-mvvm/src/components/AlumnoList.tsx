
import React from 'react';

interface LinkedButtonProps {
    id: number,
    nombre: string; // Propiedad que es un string obligatorio
    edad: number;
}

const LinkedButton: React.FC<LinkedButtonProps> = ({id, nombre, edad}) => {
    return (
        <>
            <li key={id}>{nombre} - {edad}</li>
        </>
    );
};

export default LinkedButton;
