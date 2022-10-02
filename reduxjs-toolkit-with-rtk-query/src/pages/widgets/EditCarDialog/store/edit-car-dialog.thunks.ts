import {createAsyncThunk} from "@reduxjs/toolkit";

/**
 * This action has been made async to prepare functionality
 * of fetching the more actual data from the server
 */
export const setEditCarDialogOpenById = createAsyncThunk(
    `editCarDialog/open`,
    async (arg: { id: number }) => true
)
