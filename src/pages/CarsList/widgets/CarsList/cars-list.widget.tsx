import {Paper, Table, TableBody, TableContainer, TableHead} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {useEffect} from "react";
import {CarListRowView} from "./components/car-list-row.view";
import {CarListHeaderView} from "./components/car-list-header.view";
import {selectCarsAllIds} from "./store/cars-list.selectors";
import {fetchCars} from "./store/cars-list.thunks";

const useCarsListWidgetState = () => {
    const ids = useAppSelector(selectCarsAllIds);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCars());
    }, [])

    return {ids} as const;
}

export const CarsListWidget = () => {
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
