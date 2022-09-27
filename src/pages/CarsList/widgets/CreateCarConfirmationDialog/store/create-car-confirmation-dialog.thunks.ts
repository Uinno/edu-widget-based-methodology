import {createAsyncThunk} from "@reduxjs/toolkit";

export const confirmCloseCreateCarDialog = createAsyncThunk(
    'create-car-confirmation-dialog/confirm-close',
    async () => true,
)
