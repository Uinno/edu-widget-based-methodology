import {createAsyncThunk} from "@reduxjs/toolkit";

export const confirmCloseEditCarDialog = createAsyncThunk(
    'edit-car-confirmation-dialog/confirm-close',
    async () => true,
)
