import {PersistentStore} from "../../../../contracts/PersistentStore";
import {EditableCar} from "./edit-car-dialog.store";

export interface IEditCarDialogService {
    editCar(store: PersistentStore, args: EditableCar): Promise<EditableCar | undefined>
    deleteCar(store: PersistentStore, args: {id: number}): Promise<{id: number}>
    fetchCarById(store: PersistentStore, args: {id: number}): Promise<EditableCar | undefined>
}

export class EditCarDialogService implements IEditCarDialogService{
    async editCar(store: PersistentStore, args: EditableCar): Promise<EditableCar> {
        store.loading = true;
        try {
            const {id, ...changes} = args
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'PUT',
                body: JSON.stringify(changes),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                store.error = 'Server error'
            }

            return (await response.json()) as EditableCar;
        } catch (e) {
            store.error = 'Server error'
            throw new Error(store.error)
        } finally {
            store.loading = false;
        }
    }

    async deleteCar(store: PersistentStore, args: { id: number }): Promise<{ id: number }> {
        store.loading = true;
        try {
            const {id} = args;
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                store.error = 'Server error'
            }

            return (await response.json()) as EditableCar;
        } catch (e) {
            store.error = 'Server error'
            throw new Error(store.error)
        } finally {
            store.loading = false;
        }
    }

    async fetchCarById(store: PersistentStore, args: { id: number }): Promise<EditableCar>{
        store.loading = true;
        try {
            const {id} = args;
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                store.error = 'Server error'
            }

            return (await response.json()) as EditableCar;
        } catch (e) {
            store.error = 'Server error'
            throw new Error(store.error)
        } finally {
            store.loading = false;
        }
    }
}
