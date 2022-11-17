import {CarList} from "./widgets/CarList/CarList";
import {CarListHeader} from "./widgets/CarList/components/CarListHeader";

export default function Home() {
    return (
        <div className="bg-base-100 flex flex-col items-center gap-10 p-10">
            <CarListHeader/>
            {/*@ts-ignore*/}
            <CarList/>
        </div>
    )
}
