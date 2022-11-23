import {useSelector} from "react-redux";
import {selectCarListFilterYearOptions, selectCarListFilterYearState} from "../store/car-list-filter.selectors";
import {useAppDispatch} from "../../../../../store/hooks";
import {setCurrentYearValue} from "../store/car-list-filter.store";

export const useCarListFilterYear = () => {
    const dispatch = useAppDispatch();
    const yearOptions = useSelector(selectCarListFilterYearOptions);
    const currentYearState = useSelector(selectCarListFilterYearState);

    const setCurrentYearState = (year: string) => dispatch(setCurrentYearValue(year));

    return {
        yearOptions,
        currentYearState,
        setCurrentYearState
    }
}
