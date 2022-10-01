import {useParams} from "react-router-dom";
import {Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {useEffect} from "react";
import {fetchCarById} from "./store/car-details.thunks";
import {selectCarDetails, selectCarDetailsLoading} from "./store/car-details.selectors";
import {resetCarDetails} from "./store/car-details.store";

const useCarDetailsHeaderWidgetState = () => {
    const {carId} = useParams<{ carId: string }>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (carId) {
            dispatch(fetchCarById({id: carId}))
        }

        return () => {
            dispatch(resetCarDetails());
        }
    }, [carId])

    const carDetails = useAppSelector(selectCarDetails);
    const loading = useAppSelector(selectCarDetailsLoading);


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
