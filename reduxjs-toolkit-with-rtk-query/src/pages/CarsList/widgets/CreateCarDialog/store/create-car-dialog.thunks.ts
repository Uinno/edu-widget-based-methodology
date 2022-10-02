import {createAsyncThunk} from "@reduxjs/toolkit";

export const setCreateCarDialogOpen = createAsyncThunk(
    `createCarDialog/open`,
    async () => true
)
