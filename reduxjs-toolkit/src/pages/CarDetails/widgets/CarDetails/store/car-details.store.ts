import {createSlice} from "@reduxjs/toolkit";
import {fetchCarById} from "./car-details.thunks";

type CarDetails = {
    id: number,
    brand: string,
    model: string,
    year: number
};

type CarDetailsStore = {
    details: CarDetails | null,
    loading: boolean,
}

const getInitialState = (): CarDetailsStore => ({
    details: null,
    loading: false,
})

export const carDetailsSlice = createSlice({
    name: 'car-details',
    initialState: getInitialState(),
    reducers: {
        reset() {
            return getInitialState()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCarById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCarById.fulfilled, (state, action) => {
            state.details = action.payload
            state.loading = false
        })
    }
})

export const {
    reset: resetCarDetails
} = carDetailsSlice.actions
