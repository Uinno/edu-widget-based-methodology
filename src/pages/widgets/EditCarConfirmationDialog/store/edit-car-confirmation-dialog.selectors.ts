import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../store/store";
import {editCarConfirmationDialogSlice} from "./edit-car-confirmation-dialog.store";

const domain = (state: RootState) => state[editCarConfirmationDialogSlice.name];


export const selectEditCarDialogConfirmationOpen = createSelector(
    domain,
    state => state.isConfirmationDialogOpen
)
