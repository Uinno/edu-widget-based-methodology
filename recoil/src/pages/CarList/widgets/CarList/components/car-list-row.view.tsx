import {memo} from "react";
import {Grid, TableCell, TableRow} from "@mui/material";
import {
    ShowEditCarDialogButtonWidget
} from "../../../../widgets/ShowEditCarDialogButton/show-edit-car-dialog-button.widget";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';
import {useRecoilValue} from "recoil";
import {carSelector} from "../store/car-list.store";

type Props = {
    id: string | number
}

/**
 * Usually we can easily don't use the `memo` here
 * but on the big amount of nested components in the table rows
 * such as using the Material UI it could follow to the quite heavy
 * rendering phase
 */
export const CarListRowView = memo(({id}: Props) => {
    const car = useRecoilValue(carSelector(id));

    if (!car) return null;

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
                    <ShowEditCarDialogButtonWidget id={car.id.toString()}/>
                    <Link to={`/${car.id}`}>
                        <Button>View</Button>
                    </Link>
                </Grid>
            </TableCell>
        </TableRow>
    )
}, (prevProps, nextProps) => prevProps.id === nextProps.id)
