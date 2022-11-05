import {CarListItem} from "./CarList.types";
import CarListRow from "./components/CarListRow";

async function getData(): Promise<CarListItem[]> {
    const res = await fetch('http://localhost:3001/cars', {next: {revalidate: 1}})

    return res.json();
}


export const CarList = async () => {
    const carList = await getData();

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {carList.map((car) => (
                    <CarListRow car={car} key={car.id}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}
