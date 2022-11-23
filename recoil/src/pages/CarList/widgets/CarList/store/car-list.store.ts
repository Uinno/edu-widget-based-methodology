import {selector, selectorFamily} from "recoil";
import {carListFilterYearsCurrentState} from "../../CarListFilter/store/car-list-filter.store";

export type Car = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export const carListQuery = selector({
    key: 'CarList/Query',
    get: async() => {
        const response = await fetch('http://localhost:3000/cars');
        if(!response.ok){
            return Promise.reject(response.statusText);
        }

        return (await response.json()) as Car[];
    }
})

export const carListIds = selector({
    key: 'CarList/Ids',
    get:({get}) => {
        const cars = get(carListQuery);
        const yearFilter = get(carListFilterYearsCurrentState);

        return cars
            .filter(car => {
                if(yearFilter === 'All') return true;

                return Number(yearFilter) === car.year
            })
            .map(car => car.id);
    }
})

export const carSelector = selectorFamily({
    key: 'Car',
    get: carId => async({get}) => {
        const cars = get(carListQuery);

        return cars.find(car => car.id === carId)
    }
})


