import {Grid, Paper} from "@mui/material";
import {CarListFilterYear} from "./components/car-list-filter-year";
import {Suspense} from 'react';

export const CarListFilterWidget = () => {

    return (
        <Grid item xs={12}>
            <Paper sx={{
                padding: '10px'
            }}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Suspense>
                        <CarListFilterYear/>
                    </Suspense>
                </Grid>
            </Paper>
        </Grid>
    )
}
