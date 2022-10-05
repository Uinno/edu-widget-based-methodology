import {Grid, TableCell, TableRow} from "@mui/material";
import {ShowEditCarDialogButtonWidget} from "../../ShowEditCarDialogButton/show-edit-car-dialog-button.widget";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Car} from "../store/car-list.store";
import {observer} from "mobx-react-lite";

type Props = {
    car: Car
}

export const CarListRowView = observer(({car}: Props) => {

    return (
        <TableRow
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell>{car.id}</TableCell>
            <TableCell>{car.brand}</TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.year}</TableCell>
            <TableCell>
                <Grid container direction="row" justifyContent="space-between" maxWidth="150px">
                    <ShowEditCarDialogButtonWidget id={car.id}/>
                    <Link to={`/${car.id}`}><Button>View</Button></Link>
                </Grid>
            </TableCell>
        </TableRow>
    )
})
