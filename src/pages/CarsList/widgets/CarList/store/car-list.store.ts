import {createEntityAdapter, createSlice,} from '@reduxjs/toolkit'
import {deleteCar, editCar} from "../../../../widgets/EditCarDialog/store/edit-car-dialog.thunks";
import {fetchCars} from "./car-list.thunks";
import {createCar} from "../../CreateCarDialog/store/create-car-dialog.thunks";

export type Car = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export const carListAdapter = createEntityAdapter<Car>();

export const carListSlice = createSlice({
    name: 'carList',
    initialState: carListAdapter.getInitialState({
        loading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            carListAdapter.upsertMany(state, action.payload)
        })
        builder.addCase(createCar.fulfilled, (state, action) => {
            carListAdapter.upsertOne(state, action.payload)
        })
        builder.addCase(editCar.fulfilled, (state, action) => {
            carListAdapter.upsertOne(state, action.payload)
        })
        builder.addCase(deleteCar.fulfilled, (state, action) => {
            carListAdapter.removeOne(state, action.payload.id)
        })
    }
})


