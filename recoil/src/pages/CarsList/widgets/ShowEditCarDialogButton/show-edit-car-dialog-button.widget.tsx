import Button from "@mui/material/Button";
import {EditCarDialogWidget} from "../../../widgets/EditCarDialog/edit-car-dialog.widget";
import {SxProps, Theme} from "@mui/material";
import {useSetRecoilState} from "recoil";
import {editCarDialogOpenAtom} from "../../../widgets/EditCarDialog/store/edit-car-dialog.store";
import {memo} from "react";

type Props = {
    id: number,
    sx?: SxProps<Theme>
}

const useShowEditCarDialogButtonWidget = ({id, sx}: Props) => {
    const setEditCarDialogOpenById = useSetRecoilState(editCarDialogOpenAtom)
    const setOpen = () => setEditCarDialogOpenById(id);

    return {setOpen, id, sx};
}

export const ShowEditCarDialogButtonWidget = memo((props: Props) => {

    const {setOpen, id, sx} = useShowEditCarDialogButtonWidget(props);

    return (
        <>
            <Button variant="contained" onClick={setOpen} sx={sx}>Edit</Button>
            <EditCarDialogWidget id={id}/>
        </>
    )
}, (prevProps, nextProps) => prevProps.id === nextProps.id)
