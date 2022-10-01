import {createAsyncThunk} from "@reduxjs/toolkit";
import {Car} from "../../CarList/store/car-list.store";
import {RootState} from "../../../../../store/store";
import {selectCreateCarDialogFormData, selectCreateCarDialogIsLoading} from "./create-car-dialog.selectors";
import {
    openCreateCarConfirmationDialog
} from "../../CreateCarConfirmationDialog/store/create-car-confirmation-dialog.store";
import {areObjectValuesFalsy} from "../../../../../utils/areObjectValuesFalsy";

export const createCar = createAsyncThunk(
    `createCarDialog/createCar`,
    async (arg: Omit<Car, 'id'>, thunkAPI) => {
        const response = await fetch('http://localhost:3000/cars', {
            method: 'POST',
            body: JSON.stringify(arg),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return thunkAPI.rejectWithValue({message: response.statusText})
        }

        return (await response.json()) as Car;
    }
)

const isFormContainUnsavedData = (state: RootState) => {
    const formData = selectCreateCarDialogFormData(state);

    if (formData === null) return false;

    return !areObjectValuesFalsy(formData);
}

export const setCreateCarDialogClose = createAsyncThunk(
    `createCarDialog/close`,
    async (arg, thunkAPI) => {

        /**
         * If form contain unsaved data we want to notify user about it
         * to prevent losing the progress
         */
        const isConfirmationIsNeeded = isFormContainUnsavedData(thunkAPI.getState() as RootState);
        if (isConfirmationIsNeeded) {
            thunkAPI.dispatch(openCreateCarConfirmationDialog());
            return thunkAPI.rejectWithValue(false);
        }

        return;
    },
    {
        condition: (arg, thunkAPI) => {
            const loading = selectCreateCarDialogIsLoading(thunkAPI.getState() as RootState);
            return loading !== true;
        }
    }
)

export const setCreateCarDialogOpen = createAsyncThunk(
    `createCarDialog/open`,
    async () => true
)
