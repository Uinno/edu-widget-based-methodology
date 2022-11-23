import {useRecoilState, useRecoilValue} from "recoil";
import {carListFilterYears, carListFilterYearsCurrentState} from "../store/car-list-filter.store";

export const useCarListFilterYear = () => {
    const yearOptions = useRecoilValue(carListFilterYears);
    const [currentYearState, setCurrentYearState] = useRecoilState(carListFilterYearsCurrentState);

    return {
        yearOptions,
        setCurrentYearState,
        currentYearState
    }
}
