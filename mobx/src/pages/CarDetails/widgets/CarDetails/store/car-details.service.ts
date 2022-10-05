import {PersistentStore} from "../../../../../contracts/PersistentStore";
import {CarDetails} from "./car-details.store";

export interface ICarDetailsService {
    fetchCarById(store: PersistentStore, args: { id: number }): Promise<CarDetails | undefined>
}

export class CarDetailsService implements ICarDetailsService {
    async fetchCarById(store: PersistentStore, args: { id: number }): Promise<CarDetails | undefined> {
        store.loading = true;
        try {
            const {id} = args;
            const response = await fetch(`http://localhost:3000/cars/${id}`);

            if (!response.ok) {
                store.error = 'Server error'
            }

            return (await response.json()) as CarDetails;
        } catch (e) {
            store.error = 'Server error'
            return;
        } finally {
            store.loading = false;
        }
    }
}
