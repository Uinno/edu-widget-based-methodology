import {Paper, Table, TableBody, TableContainer, TableHead} from "@mui/material";
import {CarListRowView} from "./components/car-list-row.view";
import {CarListHeaderView} from "./components/car-list-header.view";
import {useRecoilValue} from "recoil";
import {carListQuery} from "./store/car-list.store";

const useCarsListWidgetState = () => {
    const cars = useRecoilValue(carListQuery);

    return {ids: cars.map(car => car.id)} as const;
}

export const CarListWidget = () => {
    const {ids} = useCarsListWidgetState();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <CarListHeaderView/>
                </TableHead>
                <TableBody>
                    {ids.map((id) => (
                        <CarListRowView id={id} key={id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
