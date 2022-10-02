import {api} from "../../../../../store/api";
import {CarDetails} from "./car-details.store";

const carDetailsApiEnhanced = api.enhanceEndpoints({
    addTagTypes: ['CarDetails']
});
const carDetailsApi = carDetailsApiEnhanced.injectEndpoints({
    endpoints: (build) => ({
        fetchCar: build.query<CarDetails, {id: number}>({
            query: ({id}) => ({
                url: `cars/${id}`,
                method: 'GET'
            }),
            providesTags: (result) => result ? [{type: 'CarDetails', id: result.id}] : []
        })
    })
})


export const {
    useFetchCarQuery: useCarDetailsFetchCarQuery
} = carDetailsApi
