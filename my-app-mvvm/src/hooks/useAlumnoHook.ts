import { useEffect, useState } from 'react';
import { AlumnosVM } from '../viewModels/AlumnosVM'
import IAlumno from '../interfaces/IAlumno'

export const useTodoViewModel = (viewModel: AlumnosVM) => {
    const [items, setItems] = useState<IAlumno[]>(viewModel.getItems()); // Iinicializo items al array de strings que tenga el viewModel
    useEffect(() => {
        // Nos suscribimos a los cambios del ViewModel
        const unsubscribe = viewModel.subscribe(() => {
            setItems(viewModel.getItems());
        });
        // Al desmontar el componente, nos desuscribimos
        return () => unsubscribe();
    }, [viewModel]);
    return {
        items,
        addItem: (newItem: IAlumno) => viewModel.addItem(newItem),
        removeItem: (index: number) => viewModel.removeItem(index)
    };
}