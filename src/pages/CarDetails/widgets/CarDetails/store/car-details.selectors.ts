import {RootState} from "../../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";
import {carDetailsSlice} from "./car-details.store";

const domain = (state: RootState) => state[carDetailsSlice.name];

export const selectCarDetails = createSelector(
    domain,
    state => state.details
)

export const selectCarDetailsLoading = createSelector(
    domain,
    state => state.loading
)
