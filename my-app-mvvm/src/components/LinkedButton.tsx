
import React from 'react';

interface LinkedButtonProps {
    titulo: string; // Propiedad que es un string obligatorio
}

const LinkedButton: React.FC<LinkedButtonProps> = ({titulo}) => {
    return (
        <>
            <button>{titulo}</button>
        </>
    );
};

export default LinkedButton;
