import {createSlice} from "@reduxjs/toolkit";
import {confirmCloseEditCarDialog} from "./edit-car-confirmation-dialog.thunks";

type EditCarConfirmationDialogStore = {
    isConfirmationDialogOpen: boolean,
}

const getInitialState = (): EditCarConfirmationDialogStore => ({
    isConfirmationDialogOpen: false
})

export const editCarConfirmationDialogSlice = createSlice({
    name: 'edit-car-confirmation-dialog',
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
        builder.addCase(confirmCloseEditCarDialog.fulfilled, () => {
            return getInitialState()
        })
    }
})

export const {
    setConfirmationDialogOpen: openEditCarConfirmationDialog,
    setConfirmationDialogClose: closeEditCarConfirmationDialog,
} = editCarConfirmationDialogSlice.actions;
