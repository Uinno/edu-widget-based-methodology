import {RootState} from "../../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";

const domain = (state: RootState) => state.createCarDialog;

export const selectCreateCarDialogIsOpen = createSelector(
    domain,
    (createCarDialog) => createCarDialog.open
)

export const selectCreateCarDialogIsLoading = createSelector(
    domain,
    (createCarDialog) => createCarDialog.loading
)

export const selectCreateCarDialogNetworkError = createSelector(
    domain,
    state => state.error
)

export const selectCreateCarDialogFormData = createSelector(
    domain,
    state => state.formData
)
