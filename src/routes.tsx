import {CarsListPage} from "./pages/CarsList/cars.list.page";
import {CarDetailsPage} from "./pages/CarDetails/car-details.page";

export const routes = [
    {
        path: "/",
        element: <CarsListPage />,
    },
    {
        path: "/:carId",
        element: <CarDetailsPage/>
    }
]
