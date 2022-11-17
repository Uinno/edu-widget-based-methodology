import {CreateCarButtonWidget} from "../../CreateCarButton/CreateCarButton.widget";

export const CarListHeader = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title flex justify-between">Car list <CreateCarButtonWidget/></h2>
            </div>
        </div>
    )
}
