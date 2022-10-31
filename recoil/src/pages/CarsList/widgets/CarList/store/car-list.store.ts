import {atom, selector, selectorFamily} from "recoil";

export type Car = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export const carListQuery = selector({
    key: 'CarListQuery',
    get: async({get}) => {
        const response = await fetch('http://localhost:3000/cars');
        if(!response.ok){
            throw new Error('Server error');
        }

        return (await response.json()) as Car[];
    }
})

export const carList = atom({
    key: 'CarList',
    default: carListQuery
})

export const carSelector = selectorFamily({
    key: 'Car',
    get: carId => async({get}) => {
        const cars = get(carListQuery);

        return cars.find(car => car.id === carId)
    }
})


