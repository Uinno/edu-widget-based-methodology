import {createSlice} from "@reduxjs/toolkit";
import {setCreateCarDialogOpen} from "./create-car-dialog.thunks";
import {Car} from "../../CarList/store/car-list.store";

type CreateCarDialogStore = {
    loading: boolean,
    open: boolean,
    formData: Partial<Omit<Car, 'id'>> | null,
    error: string,
    isConfirmationDialogOpen: boolean,
};

const initialState = (): CreateCarDialogStore => ({
    loading: false,
    open: false,
    error: '',
    formData: null,
    isConfirmationDialogOpen: false,
})

export const createCarDialogSlice = createSlice({
    name: 'createCarDialog',
    initialState: initialState(),
    reducers: {
        forceClose() {
            return initialState();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setCreateCarDialogOpen.pending, (state) => {
            state.open = true
            state.loading = true
        })
        builder.addCase(setCreateCarDialogOpen.fulfilled, (state) => {
            state.loading = false
        })
    }
})


export const {
    forceClose: createCarDialogForceClose
} = createCarDialogSlice.actions;
