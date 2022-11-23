import {selectorFamily} from "recoil";

export type CarDetails = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export const carDetailsQuery = selectorFamily<CarDetails, string | number | undefined>({
    key: 'CarDetails/Query',
    get: carId => async() => {
        const response = await fetch(`http://localhost:3000/cars/${carId}`);
        if(!response.ok){
            return Promise.reject(response.statusText)
        }

        return (await response.json());
    }
})
