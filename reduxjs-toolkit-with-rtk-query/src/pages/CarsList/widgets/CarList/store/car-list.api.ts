import {api} from "../../../../../store/api";
import {Car} from "./car-list.store";

const carListApiEnhanced = api.enhanceEndpoints({
    addTagTypes: [
        'CarList',
    ],
});

const carListApi = carListApiEnhanced.injectEndpoints({
    endpoints: (build) => ({
        fetchCarList: build.query<Car[], void>({
            query: () => ({
                url: 'cars',
                method: 'GET',
            }),
            providesTags: (result) => (
                [
                    {type: 'CarList', id: 'LIST'},
                    ...(result ?? []).map(({id}) => ({type: 'CarList' as const, id}))
                ]
            )
        })
    })
})

export const {
    useFetchCarListQuery,
} = carListApi;
