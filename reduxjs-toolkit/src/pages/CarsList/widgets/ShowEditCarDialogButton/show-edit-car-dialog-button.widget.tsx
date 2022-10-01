import Button from "@mui/material/Button";
import {EditCarDialogWidget} from "../../../widgets/EditCarDialog/edit-car-dialog.widget";
import {useAppDispatch} from "../../../../store/hooks";
import {setEditCarDialogOpenById} from "../../../widgets/EditCarDialog/store/edit-car-dialog.thunks";
import {SxProps, Theme} from "@mui/material";

type Props = {
    id: number,
    sx?: SxProps<Theme>
}

const useShowEditCarDialogButtonWidget = ({id, sx}: Props) => {
    const dispatch = useAppDispatch();
    const setOpen = () => dispatch(setEditCarDialogOpenById({id}));

    return {setOpen, id, sx};
}

export const ShowEditCarDialogButtonWidget = (props: Props) => {

    const {setOpen, id, sx} = useShowEditCarDialogButtonWidget(props);

    return (
        <>
            <Button variant="contained" onClick={setOpen} sx={sx}>Edit</Button>
            <EditCarDialogWidget id={id}/>
        </>
    )
}
