import {Container, Grid, Paper, Typography} from "@mui/material";
import {
    ShowCreateCarDialogButtonWidget
} from "./widgets/ShowCreateCarDialogButton/show-create-car-dialog-button.widget";
import {CarListWidget} from "./widgets/CarList/car-list.widget";
import {Suspense} from 'react';
import {CarListPlaceholder} from "./components/car-list-placeholder";
import {EditCarDialogWidget} from "../widgets/EditCarDialog/edit-car-dialog.widget";
import {CarListErrorBoundary} from "./components/car-list-error-boundary";
import {CarListFilterWidget} from "./widgets/CarListFilter/car-list-filter.widget";

export const CarListPage = () => {

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
                <CarListFilterWidget/>
                <Grid item xs={12}>
                    <CarListErrorBoundary>
                        <Suspense fallback={<CarListPlaceholder/>}>
                            <CarListWidget/>
                        </Suspense>
                    </CarListErrorBoundary>
                </Grid>
            </Grid>
            <EditCarDialogWidget/>
        </Container>
    )
}
