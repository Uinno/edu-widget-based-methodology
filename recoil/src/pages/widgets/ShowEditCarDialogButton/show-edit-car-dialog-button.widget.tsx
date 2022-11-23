import Button from "@mui/material/Button";
import {SxProps, Theme} from "@mui/material";
import {memo} from "react";
import {useEditCarDialogUI} from "../EditCarDialog/hooks/useEditCarDialogUI";

type Props = {
    id: string,
    sx?: SxProps<Theme>
}

export const ShowEditCarDialogButtonWidget = memo(({id, sx}: Props) => {

    const {openEditCarDialog} = useEditCarDialogUI();

    return (
        <>
            <Button variant="contained" onClick={() => openEditCarDialog(id)} sx={sx}>Edit</Button>
        </>
    )
}, (prevProps, nextProps) => prevProps.id === nextProps.id)
