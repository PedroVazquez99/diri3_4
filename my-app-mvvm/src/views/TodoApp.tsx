import React, { useState } from "react";
import { AlumnosVM } from "../viewModels/AlumnosVM";
import { useTodoViewModel } from "../hooks/useAlumnoHook";
import IAlumno from "../interfaces/IAlumno";
import NavbarLink from "../components/NavbarLink";
import { v4 as uuidv4 } from 'uuid';
import Alumno from "../components/Alumno";


// Creamos una instancia del ViewModel fuera del componente
// En un caso real, se podría inyectar desde un contexto, provider, etc.
const todoViewModel = new AlumnosVM();
const TodoApp: React.FC = () => {
const { items, addItem, removeItem } = useTodoViewModel(todoViewModel);
const [newItem, setNewItem] = useState<IAlumno>({ id: '', nombre: "", nota: 0 });
const [selectedAlumno, setSelectedAlumno] = useState<IAlumno | null>(null);

const handleClicked = (alumno: IAlumno) => {
    setSelectedAlumno(alumno);
}

  return (
    <>
      <NavbarLink />
      <h1>Alumnos</h1>
      {selectedAlumno && (
        <div onClick={() => setSelectedAlumno(null)}>
          <Alumno alumno={selectedAlumno} />
        </div>
      )}
      <div className="agregar-div">
        <input
          type="text"
          value={newItem.nombre}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewItem({ ...newItem, id: uuidv4(), nombre: e.target.value })
          }
          placeholder="Nombre del alumno"
        />
        <input
          type="text"
          value={newItem.nota}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewItem({ ...newItem, nota: Number(e.target.value) })
          }
          placeholder="Calificación"
        />
        <button
          onClick={() => {
            addItem(newItem);
            setNewItem({ id: "", nombre: "", nota: 0 });
          }}
        >
          Agregar
        </button>

        {items.length > 0 && (
          <ul>
            {items.map((item: IAlumno, index: number) => (
                <li key={item.id} className="liItem" onClick={() => handleClicked(item)}>
                  <b>{item.id}</b> : {item.nombre}
                  <button
                    className="btnEliminar"
                    onClick={() => {
                      removeItem(index);
                      setNewItem({ ...newItem });
                    }}
                  >
                    -
                  </button>
                </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodoApp;
