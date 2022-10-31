import {Container, Grid, Paper, Skeleton, Typography} from "@mui/material";
import {
    ShowCreateCarDialogButtonWidget
} from "./widgets/ShowCreateCarDialogButton/show-create-car-dialog-button.widget";
import {CarListWidget} from "./widgets/CarList/car-list.widget";
import {Suspense} from 'react';
import {CarListPlaceholder} from "./components/CarListPlaceholder";

export const CarsListPage = () => {

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{
                        padding: '10px'
                    }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h3">Cars List</Typography>
                            <ShowCreateCarDialogButtonWidget/>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Suspense fallback={<CarListPlaceholder/>}>
                        <CarListWidget/>
                    </Suspense>
                </Grid>
            </Grid>
        </Container>
    )
}
