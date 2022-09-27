import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    selectEditCarDialogFormData,
    selectEditCarDialogInitialState,
    selectEditCarDialogLoading
} from "./edit-car-dialog.selectors";
import {RootState} from "../../../../store/store";
import {areObjectsEqual} from "../../../../utils/areObjectsEqual";
import {Car} from "../../../CarsList/widgets/CarsList/store/cars-list.store";
import {openEditCarConfirmationDialog} from "../../EditCarConfirmationDialog/store/edit-car-confirmation-dialog.store";

export const editCar = createAsyncThunk(
    'cars/editCar',
    async (arg: Car, thunkAPI) => {
        const {id, ...changes} = arg
        const response = await fetch(`http://localhost:3000/cars/${id}`, {
            method: 'PUT',
            body: JSON.stringify(changes),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return thunkAPI.rejectWithValue({message: response.statusText})
        }

        return (await response.json()) as Car;
    },
    {
        /**
         * This condition is needed to prevent unnecessary API calls if the form data hasn't been changed
         *
         * @param arg
         * @param api
         */
        condition: (arg, api) => {
            const initialState = selectEditCarDialogInitialState(api.getState() as RootState);
            const {id, ...changes} = arg;
            if(initialState === null) return false;
            return !areObjectsEqual(initialState, changes);
        },
        dispatchConditionRejection: true
    }
)

export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async (arg: { id: number }, thunkAPI) => {
        const {id} = arg;
        const response = await fetch(`http://localhost:3000/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return thunkAPI.rejectWithValue((await response.json()))
        }

        return arg;
    }
)

/**
 * This action has been made async to prepare functionality
 * of fetching the more actual data from the server
 */
export const setEditCarDialogOpenById = createAsyncThunk(
    'edit-car-dialog/open',
    async (arg: { id: number }, thunkAPI) => {
        const {id} = arg;
        const response = await fetch(`http://localhost:3000/cars/${id}`)

        if (!response.ok) {
            return thunkAPI.rejectWithValue(response.statusText)
        }

        return (await response.json()) as Car;
    },
)


const isFormContainUnsavedData = (state: RootState) => {
    const car = selectEditCarDialogInitialState(state);
    const formData = selectEditCarDialogFormData(state);
    if (car === null || formData === null) return false;

    return !areObjectsEqual(car, formData);
}


export const setEditCarDialogClose = createAsyncThunk(
    'edit-car-dialog/close',
    async (arg, thunkAPI) => {

        /**
         * If form contain unsaved data we want to notify user about it
         * to prevent losing the progress
         */
        const isConfirmationIsNeeded = isFormContainUnsavedData(thunkAPI.getState() as RootState);
        if (isConfirmationIsNeeded) {
            thunkAPI.dispatch(openEditCarConfirmationDialog());
            return thunkAPI.rejectWithValue(false);
        }

        return true;
    },
    {
        /**
         * This condition is needed to prevent closing the Dialog during the loading data from the server/store
         * @param arg
         * @param thunkAPI
         */
        condition: (arg, thunkAPI) => {
            const loading = selectEditCarDialogLoading(thunkAPI.getState() as RootState);
            return loading !== true;
        }
    }
)
