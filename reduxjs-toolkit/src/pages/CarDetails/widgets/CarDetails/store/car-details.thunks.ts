import {createAsyncThunk, EntityId} from "@reduxjs/toolkit";
import {CarDetails, carDetailsSlice} from "./car-details.store";

export const fetchCarById = createAsyncThunk(
    `${carDetailsSlice.name}/fetchCar`,
    async (arg: {id: EntityId}, thunkAPI) => {
        const {id} = arg;
        const response = await fetch(`http://localhost:3000/cars/${id}`);

        if (!response.ok) {
            return thunkAPI.rejectWithValue(response.statusText)
        }

        return (await response.json()) as CarDetails;
    }
)

