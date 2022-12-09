import {atom, selector} from "recoil";
import {carListQuery} from "../../CarList/store/car-list.store";

export const carListFilterYears = selector({
    key: 'CarListFilterYears',
    get: ({get}) => {
        const carList = get(carListQuery);
        return [...new Set(['All', ...carList.map(car => car.year)])]
    }
})

export const carListFilterYearsCurrentState = atom({
    key: 'CarListFilterYearsCurrentState',
    default: 'All'
})
