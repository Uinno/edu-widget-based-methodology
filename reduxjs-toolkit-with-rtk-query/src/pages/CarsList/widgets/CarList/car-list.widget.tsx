import {Paper, Table, TableBody, TableContainer, TableHead} from "@mui/material";
import {CarListRowView} from "./components/car-list-row.view";
import {CarListHeaderView} from "./components/car-list-header.view";
import {useFetchCarListQuery} from "./store/car-list.api";

const useCarsListWidgetState = () => {
    const {data} = useFetchCarListQuery();

    const ids = (data ?? []).map(({id}) => id);

    return {ids}
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
