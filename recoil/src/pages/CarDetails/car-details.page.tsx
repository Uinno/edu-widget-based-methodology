import {Container, Grid, Paper, Typography} from "@mui/material";
import {CarDetailsWidget} from "./widgets/CarDetails/car-details.widget";
import {Link, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import {ShowEditCarDialogButtonWidget} from "../widgets/ShowEditCarDialogButton/show-edit-car-dialog-button.widget";
import {EditCarDialogWidget} from "../widgets/EditCarDialog/edit-car-dialog.widget";

export const CarDetailsPage = () => {
    const {carId} = useParams<{ carId: string }>();

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{
                        padding: '10px'
                    }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h3">Car Details</Typography>
                            {carId && (
                                <>
                                    <ShowEditCarDialogButtonWidget id={carId}
                                                                   sx={{marginLeft: 'auto', marginRight: '5px'}}/>
                                    <EditCarDialogWidget/>
                                </>
                            )}
                            <Link to=".." relative="path">
                                <Button>Back</Button>
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <CarDetailsWidget/>
                </Grid>
            </Grid>
        </Container>
    )
}
