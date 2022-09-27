import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../../store/store";

const domain = (state: RootState) => state.createCarConfirmationDialog;


export const selectCreateCarDialogConfirmationOpen = createSelector(
    domain,
    state => state.isConfirmationDialogOpen
)
