import {RootState} from "../../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";
import {createCarDialogSlice} from "./create-car-dialog.store";

const domain = (state: RootState) => state[createCarDialogSlice.name];

export const selectCreateCarDialogIsOpen = createSelector(
    domain,
    (createCarDialog) => createCarDialog.open
)
