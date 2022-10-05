import {makeAutoObservable} from "mobx";
import {CarListService, ICarListService} from "./car-list.service";
import {PersistentStore} from "../../../../../contracts/PersistentStore";

export type Car = {
    id: number,
    brand: string,
    model: string,
    year: number
};


export class CarListStore implements PersistentStore{
    service: ICarListService;
    cars: Car[] = [];
    loading: boolean = false;
    error: string | null = null;

    constructor(service: ICarListService) {
        this.service = service;
        makeAutoObservable(this);
    }

    async fetchCarList(){
        this.cars = await this.service.fetchCarList(this);
    }
}

export const carListStore = new CarListStore(new CarListService());
