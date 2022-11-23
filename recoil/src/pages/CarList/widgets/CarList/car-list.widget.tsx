import {Paper, Table, TableBody, TableContainer, TableHead} from "@mui/material";
import {CarListRowView} from "./components/car-list-row.view";
import {CarListHeaderView} from "./components/car-list-header.view";
import {useRecoilValue} from "recoil";
import {carListIds} from "./store/car-list.store";

export const CarListWidget = () => {

    /**
     * Here we can use a quite familiar Redux way and pass id to the children
     */
    const ids = useRecoilValue(carListIds);

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
