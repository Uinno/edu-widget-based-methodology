import Link from "next/link";
import {CarListItem} from "../CarList.types";
import {EditCarButton} from "../../../../widgets/EditCarButton/EditCarButton";

export default function CarListRow({car}: { car: CarListItem }) {
    return (<tr key={car.id}>
        <th>{car.id}</th>
        <td>{car.brand}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>
            <EditCarButton id={`${car.id}`}/>
            <Link href={`/cars/${car.id}`}>View</Link>
        </td>
    </tr>)
}
