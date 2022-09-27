import {createEntityAdapter, createSlice,} from '@reduxjs/toolkit'
import {deleteCar, editCar} from "../../../../widgets/EditCarDialog/store/edit-car-dialog.thunks";
import {fetchCars} from "./cars-list.thunks";
import {createCar} from "../../CreateCarDialog/store/create-car-dialog.thunks";

export type Car = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export const carsListAdapter = createEntityAdapter<Car>();

export const carsListSlice = createSlice({
    name: 'cars-list',
    initialState: carsListAdapter.getInitialState({
        loading: false,
    }),
    reducers: {
        carAddOne: carsListAdapter.addOne,
        carAddMany: carsListAdapter.addMany,
        carRemoveOne: carsListAdapter.removeOne,
        carRemoveMany: carsListAdapter.removeMany,
        carRemoveAll: carsListAdapter.removeAll
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            carsListAdapter.upsertMany(state, action.payload)
        })
        builder.addCase(createCar.fulfilled, (state, action) => {
            carsListAdapter.upsertOne(state, action.payload)
        })
        builder.addCase(editCar.fulfilled, (state, action) => {
            carsListAdapter.upsertOne(state, action.payload)
        })
        builder.addCase(deleteCar.fulfilled, (state, action) => {
            carsListAdapter.removeOne(state, action.payload.id)
        })
    }
})

