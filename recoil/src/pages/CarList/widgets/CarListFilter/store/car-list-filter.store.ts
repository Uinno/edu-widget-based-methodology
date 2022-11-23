import {atom, selector} from "recoil";
import {carListQuery} from "../../CarList/store/car-list.store";

export const carListFilterYears = selector({
    key: 'CarListFilterYears',
    get: ({get}) => {
        const carList = get(carListQuery);
        return [...new Set(['All', ...carList.map(car => car.year)])]
    }
})

export const carListFilterModels = selector({
    key: 'CarListFilterModels',
    get: ({get}) => {
        const carList = get(carListQuery);
        return [...new Set(['All', ...carList.map(car => car.model)])]
    }
})

export const carListFilterBrands = selector({
    key: 'CarListFilterBrands',
    get: ({get}) => {
        const carList = get(carListQuery);
        return [...new Set(['All', ...carList.map(car => car.brand)])]
    }
})

export const carListFilterYearsCurrentState = atom({
    key: 'CarListFilterYearsCurrentState',
    default: 'All'
})

export const carListFilterModelsCurrentState = atom({
    key: 'CarListFilterModelsCurrentState',
    default: 'All'
})

export const carListFilterBrandsCurrentState = atom({
    key: 'CarListFilterBrandsCurrentState',
    default: 'All'
})
