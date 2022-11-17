import CarDetailsWidget from "./widgets/CarDetails/CarDetails.widget";
import {CarDetailsHeader} from "./components/CarDetailsHeader";

export default async function CarDetailsPage({params}: { params: { id: string } }) {

    return (
        <div className="overflow-x-auto flex flex-col items-center gap-10 p-10 bg-base-100">
            <CarDetailsHeader/>
            {/*@ts-ignore*/}
            <CarDetailsWidget id={params.id}/>
        </div>
    )
}
