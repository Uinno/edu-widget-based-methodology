import {createSlice, EntityId} from "@reduxjs/toolkit";
import {Car} from "../../../CarsList/widgets/CarList/store/car-list.store";
import {setEditCarDialogOpenById} from "./edit-car-dialog.thunks";


type EditCarDialogStore = {
    loading: boolean,
    open: boolean,
    entityId: EntityId | null,
    initialState: Omit<Car, 'id'> | null,
    formData: Partial<Omit<Car, 'id'>> | null,
    error: string,
};

const initialState = (): EditCarDialogStore => ({
    loading: false,
    open: false,
    initialState: null,
    formData: null,
    entityId: null,
    error: '',
})

export const editCarDialogSlice = createSlice({
    name: 'editCarDialog',
    initialState: initialState(),
    reducers: {
        forceClose() {
            return initialState();
        }
    },
    extraReducers: (builder) => {
        /**
         * Set loading to true for the UI/UX representation of loading state
         */
        builder.addCase(setEditCarDialogOpenById.pending, (state, action) => {
            state.open = true;
            state.loading = true;
            state.entityId = action.meta.arg.id
        })
        /**
         * Set loading to false in case of successful state loading from server/store
         */
        builder.addCase(setEditCarDialogOpenById.fulfilled, (state) => {
            state.loading = false;
        })
    }
})

export const {
    forceClose: editCarDialogForceClose
} = editCarDialogSlice.actions;

