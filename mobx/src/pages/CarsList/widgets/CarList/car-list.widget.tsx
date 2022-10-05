import {Paper, Table, TableBody, TableContainer, TableHead} from "@mui/material";
import {useEffect} from "react";
import {CarListRowView} from "./components/car-list-row.view";
import {CarListHeaderView} from "./components/car-list-header.view";
import {observer} from "mobx-react-lite";
import {carListStore} from "./store/car-list.store";

const useCarsListWidgetState = () => {
    const {cars} = carListStore;
    useEffect(() => {
        carListStore.fetchCarList()
    }, [])

    return {cars} as const;
}

export const CarListWidget = observer(() => {
    const {cars} = useCarsListWidgetState();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <CarListHeaderView/>
                </TableHead>
                <TableBody>
                    {cars.map((car) => (
                        <CarListRowView car={car} key={car.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
})
