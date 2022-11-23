import {selector, selectorFamily} from "recoil";

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

        return cars.map(car => car.id);
    }
})

export const carSelector = selectorFamily({
    key: 'Car',
    get: carId => async({get}) => {
        const cars = get(carListQuery);

        return cars.find(car => car.id === carId)
    }
})


