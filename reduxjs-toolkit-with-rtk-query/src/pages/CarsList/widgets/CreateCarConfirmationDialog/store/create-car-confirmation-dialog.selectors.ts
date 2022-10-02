import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../../store/store";
import {createCarConfirmationDialogSlice} from "./create-car-confirmation-dialog.store";

const domain = (state: RootState) => state[createCarConfirmationDialogSlice.name];


export const selectCreateCarDialogConfirmationOpen = createSelector(
    domain,
    state => state.isConfirmationDialogOpen
)
