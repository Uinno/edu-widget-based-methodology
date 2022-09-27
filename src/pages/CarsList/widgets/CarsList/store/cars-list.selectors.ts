import {RootState} from "../../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";
import {carsListAdapter} from "./cars-list.store";

const domain = (state: RootState) => state;
const carsDomain = createSelector(domain, (state) => state.cars);

const carsListSelectors = carsListAdapter.getSelectors<RootState>(
    carsDomain
)

export const {
    selectById: selectCarById,
    selectIds: selectCarsAllIds
} = carsListSelectors;
