import {CarListPage} from "./pages/CarList/car-list.page";
import {CarDetailsPage} from "./pages/CarDetails/car-details.page";

export const routes = [
    {
        path: "/",
        element: <CarListPage />,
    },
    {
        path: "/:carId",
        element: <CarDetailsPage/>
    }
]
