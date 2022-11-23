import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const getInitialState = () => ({
    year: 'All'
})

export const carListFilterSlice = createSlice({
    name: "carListFilter",
    initialState: getInitialState(),
    reducers: {
        setCurrentYearValue(state, action: PayloadAction<string>){
            state.year = action.payload
        }
    }
})

export const {
    setCurrentYearValue,
} = carListFilterSlice.actions


