import {configureStore} from '@reduxjs/toolkit'
import {carsListSlice} from "../pages/CarsList/widgets/CarsList/store/cars-list.store";
import {createCarDialogSlice} from "../pages/CarsList/widgets/CreateCarDialog/store/create-car-dialog.store";
import {editCarDialogSlice} from "../pages/widgets/EditCarDialog/store/edit-car-dialog.store";
import {
    editCarConfirmationDialogSlice
} from "../pages/widgets/EditCarConfirmationDialog/store/edit-car-confirmation-dialog.store";
import {
    createCarConfirmationDialogSlice
} from "../pages/CarsList/widgets/CreateCarConfirmationDialog/store/create-car-confirmation-dialog.store";
import {carDetailsSlice} from "../pages/CarDetails/widgets/CarDetails/store/car-details.store";

export const store = configureStore({
    reducer: {
        cars: carsListSlice.reducer,
        createCarDialog: createCarDialogSlice.reducer,
        editCarDialog: editCarDialogSlice.reducer,
        editCarConfirmationDialog: editCarConfirmationDialogSlice.reducer,
        createCarConfirmationDialog: createCarConfirmationDialogSlice.reducer,
        carDetails: carDetailsSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
