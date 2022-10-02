import {api} from "../../../../../store/api";
import {Car} from "../../CarList/store/car-list.store";

const createCarDialogApiEnhanced = api.enhanceEndpoints({
    addTagTypes: [
        'CarList'
    ]
})

const createCarDialogApi = createCarDialogApiEnhanced.injectEndpoints({
    endpoints: build => ({
        createCar: build.mutation<Car, Omit<Car, 'id'>>({
            query: (arg) => ({
                url: 'cars',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: [{type: 'CarList', id: 'LIST'}]
        })
    })
})

export const {
    useCreateCarMutation
} = createCarDialogApi;
