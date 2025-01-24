import IAlumno from '../interfaces/IAlumno';

const alumnos: IAlumno[] = [
    { nombre: "Juan", nota: 8 },
    { nombre: "Luisa", nota: 4 },
    { nombre: "Pepe", nota: 7 }
];

export const fetchItemsFromAPI = async (): Promise<IAlumno[]> => {
    // Aquí se haría una llamada real al API
    return alumnos;
   };
   
   export const addItemToAPI = async (alumno: IAlumno): Promise<IAlumno[]> => {
    // Simulamos una llamada POST para agregar un nuevo elemento
    alumnos.push(alumno);
    console.log(`Elemento agregado al servidor: ${alumno}`);
    return await fetchItemsFromAPI(); // Simula obtener los datos actualizados
   };

   export const removeItemFromAPI = async (index: number): Promise<IAlumno[]> => {

    // Simulamos una llamada DELETE para eliminar un elemento
    alumnos.splice(index, 1);
    console.log(`Elemento eliminado en la posición: ${index}`);
    return await fetchItemsFromAPI(); // Simula obtener los datos actualizados
   };