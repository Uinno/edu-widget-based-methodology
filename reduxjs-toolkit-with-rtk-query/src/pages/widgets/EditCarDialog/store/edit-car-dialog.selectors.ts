import {RootState} from "../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";
import {editCarDialogSlice} from "./edit-car-dialog.store";

const domain = (state: RootState) => state[editCarDialogSlice.name];

export const selectEditCarDialogIsOpenById = (id: number) => createSelector(
    domain,
    state => state.open && state.entityId === id
)
