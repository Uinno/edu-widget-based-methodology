import {CarDetailsService, ICarDetailsService} from "./car-details.service";
import {makeAutoObservable} from "mobx";
import {PersistentStore} from "../../../../../contracts/PersistentStore";

export type CarDetails = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export class CarDetailsStore implements PersistentStore {

    error: string | null = '';
    loading: boolean = false;
    service: ICarDetailsService;
    carDetails: CarDetails | undefined;

    constructor(service: ICarDetailsService) {
        this.service = service;
        makeAutoObservable(this);
    }

    async fetchCarById(args: {id: number}){
        this.carDetails = await this.service.fetchCarById(this, args);
    }
}

export const carDetailsStore = new CarDetailsStore(new CarDetailsService());
