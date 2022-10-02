import {useParams} from "react-router-dom";
import {Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {useCarDetailsFetchCarQuery} from "./store/car-details.api";

const useCarDetailsHeaderWidgetState = () => {
    const {carId} = useParams<{ carId: string }>();
    const {data, isLoading} = useCarDetailsFetchCarQuery({id: Number(carId)})

    return {carDetails: data, loading: isLoading}
}

export const CarDetailsWidget = () => {
    const {carDetails, loading} = useCarDetailsHeaderWidgetState();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography variant="h6">Brand</Typography>
                        </TableCell>
                        <TableCell>
                            {loading && <Skeleton/>}
                            <Typography>{carDetails?.brand}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography variant="h6">Model</Typography>
                        </TableCell>
                        <TableCell>
                            {loading && <Skeleton/>}
                            <Typography>{carDetails?.model}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography variant="h6">Year</Typography>
                        </TableCell>
                        <TableCell>
                            {loading && <Skeleton/>}
                            <Typography>{carDetails?.year}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
