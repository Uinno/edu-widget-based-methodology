import {RootState} from "../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";
import {editCarDialogSlice} from "./edit-car-dialog.store";

const domain = (state: RootState) => state[editCarDialogSlice.name];

export const selectEditCarDialogIsOpenById = (id: number) => createSelector(
    domain,
    state => state.open && state.entityId === id
)

export const selectEditCarDialogInitialState = createSelector(
    domain,
    state => state.initialState,
)

export const selectEditCarDialogLoading = createSelector(
    domain,
    state => state.loading
)

export const selectEditCarDialogNetworkError = createSelector(
    domain,
    state => state.error
)

export const selectEditCarDialogFormIsDirty = createSelector(
    domain,
    state => state.isDirty
)

