import {useCarListFilterYear} from "../hooks/useCarListFilterYear";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const CarListFilterYear = () => {
    const {
        setCurrentYearState,
        currentYearState,
        yearOptions
    } = useCarListFilterYear();

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="car-list-filter-year">Year</InputLabel>
            <Select
                labelId="car-list-filter-year"
                id="car-list-filter-year"
                value={currentYearState}
                label="Year"
                onChange={(e) => setCurrentYearState(e.target.value)}
            >
                {yearOptions.map(year => (
                    <MenuItem value={year} key={year}>{year}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
