import {RootState} from "../../../../../store/store";
import {createSelector, EntityId} from "@reduxjs/toolkit";
import {carListAdapter, carListSlice} from "./car-list.store";
import {selectCarListFilterYearState} from "../../CarListFilter/store/car-list-filter.selectors";

const domain = (state: RootState) => state;
const carsDomain = createSelector(domain, (state) => state[carListSlice.name]);

const carListSelectors = carListAdapter.getSelectors<RootState>(
    carsDomain
)

export const {
    selectAll: selectAllCars
} = carListSelectors;

/**
 * This selector is rewritten due to the easier memoization in the component
 * @param id
 */
export const selectCarByIdSelector = (id: EntityId) => (state: RootState) => carListSelectors.selectById(state, id);

export const selectCarsAllIds = createSelector(
    selectCarListFilterYearState,
    (state: RootState) => carListSelectors.selectAll(state),
    (currentYear, cars) => cars.filter(car => {
        if(currentYear === 'All') return true;
        return car.year === Number(currentYear)
    }).map(car => car.id)
)
