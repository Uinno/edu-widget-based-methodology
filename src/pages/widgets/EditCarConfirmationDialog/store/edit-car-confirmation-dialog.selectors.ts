import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../store/store";

const domain = (state: RootState) => state.editCarConfirmationDialog;


export const selectEditCarDialogConfirmationOpen = createSelector(
    domain,
    state => state.isConfirmationDialogOpen
)
