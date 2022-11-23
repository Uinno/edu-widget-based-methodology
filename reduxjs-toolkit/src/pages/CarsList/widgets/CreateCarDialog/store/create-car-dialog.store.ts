import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import {createCar, setCreateCarDialogClose, setCreateCarDialogOpen} from "./create-car-dialog.thunks";
import {Car} from "../../CarList/store/car-list.store";
import {
    confirmCloseCreateCarDialog
} from "../../CreateCarConfirmationDialog/store/create-car-confirmation-dialog.thunks";

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
        setFormData(state, action: PayloadAction<Partial<Omit<Car, 'id'>>>) {
            state.formData = action.payload
        },
        networkErrorCleared(state) {
            state.error = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createCar.pending, (state) => {
            state.loading = true
        })
        /**
         * Process the network or server errors
         * The error message could be used to show the proper snackbar
         */
        builder.addCase(createCar.rejected, (state, action) => {
            if (action.meta.condition) {
                return initialState()
            }
            const payload = action.payload as { message: string }
            state.loading = false
            state.error = payload.message
        })
        builder.addCase(setCreateCarDialogOpen.fulfilled, (state) => {
            state.open = true
            state.loading = false
        })
        /**
         * Reset widget store in case of successful entity creation or form closing
         */
        builder.addMatcher(
            isAnyOf(
                setCreateCarDialogClose.fulfilled,
                createCar.fulfilled,
                confirmCloseCreateCarDialog.fulfilled
            ),
            () => {
                return initialState()
            })

    }
})


export const {
    setFormData: setCreateCarDialogFormData,
    networkErrorCleared: createCarDialogNetworkErrorCleared
} = createCarDialogSlice.actions;
