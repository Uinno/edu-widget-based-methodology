import {createAsyncThunk} from "@reduxjs/toolkit";
import {Car} from "./cars-list.store";

export const fetchCars = createAsyncThunk<Car[]>(
    'cars-list/fetchCars',
    async (arg, thunkAPI) => {
        const response = await fetch('http://localhost:3000/cars');

        if (!response.ok) {
            return thunkAPI.rejectWithValue((await response.json()))
        }

        return (await response.json()) as Car[];
    }
)
