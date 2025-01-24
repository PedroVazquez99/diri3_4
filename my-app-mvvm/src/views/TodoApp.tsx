import React, { useState } from "react";
import { AlumnosVM } from "../viewModels/AlumnosVM";
import { useTodoViewModel } from "../hooks/useAlumnoHook";
import IAlumno from "../interfaces/IAlumno";
import NavbarLink from "../components/NavbarLink";

// Creamos una instancia del ViewModel fuera del componente
// En un caso real, se podría inyectar desde un contexto, provider, etc.
const todoViewModel = new AlumnosVM();
const TodoApp: React.FC = () => {
  const { items, addItem, removeItem } = useTodoViewModel(todoViewModel);
  const [newItem, setNewItem] = useState<IAlumno>({ nombre: "", nota: 0 });

  return (
    <>
      <NavbarLink />
      <h1>Alumnos</h1>
      <div className="agregar-div">
        <input
          type="text"
          value={newItem.nombre}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewItem({ ...newItem, nombre: e.target.value })
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
            setNewItem({ nombre: "", nota: 0 });
          }}
        >
          Agregar
        </button>
        <ul>
          {items.map((item: IAlumno, index: number) => (
            <>
              <li
                key={index}
                
              >
                {item.nombre} - {item.nota}
              <button className="btnEliminar" 
                    onClick={() => {
                        removeItem(index);
                        setNewItem({ ...newItem });
                    }}>-
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
