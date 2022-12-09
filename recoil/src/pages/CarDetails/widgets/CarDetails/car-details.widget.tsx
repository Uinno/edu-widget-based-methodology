import {useParams} from "react-router-dom";
import {Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {carDetailsQuery} from "./store/car-details.store";
import {useRecoilValueLoadable} from "recoil";

const useCarDetailsHeaderWidgetState = () => {
    const {carId} = useParams<{ carId: string }>();

    /**
     * The approach below is the alternative using the Suspense
     * and here we can handle loading process in the "good old" way.
     */
    const {state, contents: carDetails } = useRecoilValueLoadable(carDetailsQuery(carId));
    const loading = state === "loading"

    return {carDetails, loading}
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
