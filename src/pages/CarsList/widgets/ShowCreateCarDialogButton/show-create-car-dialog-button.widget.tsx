import Button from "@mui/material/Button";
import {CreateCarDialogWidget} from "../CreateCarDialog/create-car-dialog.widget";
import {useAppDispatch} from "../../../../store/hooks";
import {setCreateCarDialogOpen} from "../CreateCarDialog/store/create-car-dialog.thunks";

type Props = {
}

const useShowCreateCarDialogButtonWidgetState = (props: Props) => {
    const dispatch = useAppDispatch();
    const setOpen = () => dispatch(setCreateCarDialogOpen());

    return {onCreateClickHandler: setOpen};
}

export const ShowCreateCarDialogButtonWidget = (props: Props) => {
    const {onCreateClickHandler} = useShowCreateCarDialogButtonWidgetState(props);

    return (
        <>
            <Button variant="contained" onClick={onCreateClickHandler}>Create</Button>
            <CreateCarDialogWidget/>
        </>
    )
}
