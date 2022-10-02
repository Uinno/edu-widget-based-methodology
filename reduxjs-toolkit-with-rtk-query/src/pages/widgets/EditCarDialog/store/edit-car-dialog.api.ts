import {api} from "../../../../store/api";
import {Car} from "../../../CarsList/widgets/CarList/store/car-list.store";

const editCarDialogApiEnhanced = api.enhanceEndpoints({
    addTagTypes: ['CarList', 'CarDetails']
});
const editCarDialogApi = editCarDialogApiEnhanced.injectEndpoints({
    endpoints: (build) => ({
        editCar: build.mutation<Car, Car>({
            query: ({id, ...changes}) => ({
                url: `cars/${id}`,
                method: 'PUT',
                body: changes
            }),
            invalidatesTags: (result, error, arg) => [{type: 'CarList', id: arg.id}, {type: 'CarDetails', id: arg.id}]
        }),
        deleteCar: build.mutation<void, {id: number}>({
            query: ({id}) => ({
                url: `cars/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, arg) => [{type: 'CarList', id: arg.id}, {type: 'CarDetails', id: arg.id}]
        }),
        fetchCar: build.query<Car, {id: number}>({
            query: ({id}) => ({
                url: `cars/${id}`,
                method: 'GET'
            }),
            providesTags: (result) => result ? [{type: 'CarList', id: result.id}] : []
        })
    })
})

export const {
    useEditCarMutation,
    useDeleteCarMutation,
    useFetchCarQuery
} = editCarDialogApi;
