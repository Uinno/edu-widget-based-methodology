import Button from "@mui/material/Button";
import {CreateCarDialogWidget} from "../CreateCarDialog/create-car-dialog.widget";
import {useSetRecoilState} from "recoil";
import {createCarDialogOpenAtom} from "../CreateCarDialog/store/create-car-dialog.store";

const useShowCreateCarDialogButtonWidgetState = () => {
    const setCreateCarDialogOpen = useSetRecoilState(createCarDialogOpenAtom);
    const onCreateClickHandler = () => setCreateCarDialogOpen(true);

    return {onCreateClickHandler};
}

export const ShowCreateCarDialogButtonWidget = () => {
    const {onCreateClickHandler} = useShowCreateCarDialogButtonWidgetState();

    return (
        <>
            <Button variant="contained" onClick={onCreateClickHandler}>Create</Button>
            <CreateCarDialogWidget/>
        </>
    )
}
