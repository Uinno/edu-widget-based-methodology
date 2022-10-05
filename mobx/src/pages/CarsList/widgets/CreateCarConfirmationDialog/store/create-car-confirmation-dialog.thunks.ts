import {createAsyncThunk} from "@reduxjs/toolkit";

export const confirmCloseCreateCarDialog = createAsyncThunk(
    `createCarConfirmationDialog/confirmClose`,
    async () => true,
)
