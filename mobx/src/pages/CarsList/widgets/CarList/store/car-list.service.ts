import {Car} from "./car-list.store";
import {PersistentStore} from "../../../../../contracts/PersistentStore";

export interface ICarListService {
    fetchCarList(store: PersistentStore
    ): Promise<Car[]>
}


export class CarListService implements ICarListService {
    constructor() {
    }

    async fetchCarList(store: PersistentStore) {
        store.loading = true;
        try {
            const response = await fetch('http://localhost:3000/cars');

            if (!response.ok) {
                store.error = 'Server error'
            }

            return (await response.json()) as Car[];
        } catch (e) {
            store.error = 'Server error'
            return [] as Car[]
        } finally {
            store.loading = false;
        }
    }
}
