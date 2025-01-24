import { fetchItemsFromAPI, addItemToAPI, removeItemFromAPI } from '../models/alumnos';
import IAlumno from '../interfaces/IAlumno'
export class AlumnosVM {
    
    private items: IAlumno[] = []; // Array de items
    private subscribers: Array<() => void> = []; // Array de los suscriptores
    
    constructor() {
        // Carga inicial de los ítems
        this.loadItems();
    }

    // Carga los items
    private async loadItems() {
        this.items = await fetchItemsFromAPI(); // cargar datos de la API
        this.notifyChange(); // Notifico de los cambios
    }

    // Obtener items
    public getItems(): IAlumno[] {
        return this.items;
    }

    // Agregar item
    public async addItem(newItem: IAlumno): Promise<void> {
        if (newItem) {
            this.items = await addItemToAPI(newItem); // Llamo al metodo (POST) para agregar item
            this.notifyChange(); // Notifico de los cambios
        }
    }

    // Eliminar item
    public async removeItem(index: number): Promise<void> {
        this.items = await removeItemFromAPI(index); // Llamo al DELETE de la API
        this.notifyChange();
    }

    // Suscripción a cambios
    public subscribe(callback: () => void): () => void {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }
    
    // Notificar cambios
    private notifyChange() {
        this.subscribers.forEach(cb => cb());
    }
}