import React from 'react';
import IAlumno from '../interfaces/IAlumno';

interface LinkedButtonProps {
    alumno: IAlumno
}

const Alumno: React.FC<LinkedButtonProps> = ({alumno}) => {
    return (
        <>
            <div className="aludiv">
                <p>ID: {alumno.id}</p>
                <p>Nombre: {alumno.nombre}</p>
                <p>Nota: {alumno.nota}</p>
            </div>
        </>
    );
};

export default Alumno;
