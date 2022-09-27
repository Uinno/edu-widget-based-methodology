import {TableCell, TableRow} from "@mui/material";
import {memo} from "react";

export const CarListHeaderView = memo(() => {
    return (<TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Brand</TableCell>
        <TableCell>Model</TableCell>
        <TableCell>Year</TableCell>
        <TableCell>Actions</TableCell>
    </TableRow>)
}, () => true);
