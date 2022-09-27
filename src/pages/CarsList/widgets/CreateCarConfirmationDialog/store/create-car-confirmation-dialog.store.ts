import {createSlice} from "@reduxjs/toolkit";
import {confirmCloseCreateCarDialog} from "./create-car-confirmation-dialog.thunks";

type CreateCarConfirmationDialogStore = {
    isConfirmationDialogOpen: boolean,
}

const getInitialState = (): CreateCarConfirmationDialogStore => ({
    isConfirmationDialogOpen: false
})

export const createCarConfirmationDialogSlice = createSlice({
    name: 'create-car-confirmation-dialog',
    initialState: getInitialState(),
    reducers: {
        setConfirmationDialogOpen(state) {
            state.isConfirmationDialogOpen = true
        },
        setConfirmationDialogClose(state) {
            state.isConfirmationDialogOpen = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(confirmCloseCreateCarDialog.fulfilled, () => {
            return getInitialState()
        })
    }
})

export const {
    setConfirmationDialogOpen: openCreateCarConfirmationDialog,
    setConfirmationDialogClose: closeCreateCarConfirmationDialog,
} = createCarConfirmationDialogSlice.actions;
