import {configureStore} from '@reduxjs/toolkit'
import {createCarDialogSlice} from "../pages/CarsList/widgets/CreateCarDialog/store/create-car-dialog.store";
import {editCarDialogSlice} from "../pages/widgets/EditCarDialog/store/edit-car-dialog.store";
import {
    editCarConfirmationDialogSlice
} from "../pages/widgets/EditCarConfirmationDialog/store/edit-car-confirmation-dialog.store";
import {
    createCarConfirmationDialogSlice
} from "../pages/CarsList/widgets/CreateCarConfirmationDialog/store/create-car-confirmation-dialog.store";
import {api} from "./api";

export const store = configureStore({
    reducer: {
        [createCarDialogSlice.name]: createCarDialogSlice.reducer,
        [editCarDialogSlice.name]: editCarDialogSlice.reducer,
        [editCarConfirmationDialogSlice.name]: editCarConfirmationDialogSlice.reducer,
        [createCarConfirmationDialogSlice.name]: createCarConfirmationDialogSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
