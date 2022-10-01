import {RootState} from "../../../../../store/store";
import {createSelector, EntityId} from "@reduxjs/toolkit";
import {carListAdapter, carListSlice} from "./car-list.store";

const domain = (state: RootState) => state;
const carsDomain = createSelector(domain, (state) => state[carListSlice.name]);

const carListSelectors = carListAdapter.getSelectors<RootState>(
    carsDomain
)

export const {
    selectById: selectCarById,
    selectIds: selectCarsAllIds
} = carListSelectors;

/**
 * This selector is rewritten due to the easier memoization in the component
 * @param id
 */
export const selectCarByIdSelector = (id: EntityId) => (state: RootState) => carListSelectors.selectById(state, id);
