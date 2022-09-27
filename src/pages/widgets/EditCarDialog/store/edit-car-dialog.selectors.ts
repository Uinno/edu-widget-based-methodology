import {RootState} from "../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";

const domain = (state: RootState) => state.editCarDialog;

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

export const selectEditCarDialogFormData = createSelector(
    domain,
    state => state.formData
)

