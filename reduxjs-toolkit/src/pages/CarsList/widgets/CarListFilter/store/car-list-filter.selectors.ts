import {RootState} from "../../../../../store/store";
import {carListFilterSlice} from "./car-list-filter.store";
import {createSelector} from "@reduxjs/toolkit";
import {Car} from "../../CarList/store/car-list.store";

const domain = (state: RootState) => state[carListFilterSlice.name];

const isCar = (car: Car | undefined): car is Car => {
    return car !== undefined;
}

export const selectCarListFilterYearOptions = createSelector(
    (state: RootState) => state.carList.ids,
    (state: RootState) => state.carList.entities,
    (ids, carsDictionary) => {
        const cars = ids.map(id => carsDictionary[id]).filter(isCar);
        return [...new Set(['All'].concat(cars.map(car => car.year.toString())))]
    }
)

export const selectCarListFilterYearState = createSelector(
    domain,
    (state) => state.year
)
