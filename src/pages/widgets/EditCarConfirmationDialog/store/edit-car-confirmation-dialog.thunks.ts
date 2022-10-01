import {createAsyncThunk} from "@reduxjs/toolkit";

export const confirmCloseEditCarDialog = createAsyncThunk(
    `editCarConfirmationDialog/confirmClose`,
    async () => true,
)
