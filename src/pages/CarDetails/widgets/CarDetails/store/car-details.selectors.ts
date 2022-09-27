import {RootState} from "../../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";

const domain = (state: RootState) => state.carDetails;

export const selectCarDetails = createSelector(
    domain,
    state => state.details
)

export const selectCarDetailsLoading = createSelector(
    domain,
    state => state.loading
)
