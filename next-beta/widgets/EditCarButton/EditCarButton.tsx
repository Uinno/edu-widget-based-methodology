'use client'

import {useSetRecoilState} from "recoil";
import {editCarDialogId} from "../EditCarDialog/store/EditCarDialog.store";
import EditCarDialog from "../EditCarDialog/EditCarDialog";

export const EditCarButton = ({id}: { id: string }) => {
    const setEditCarDialogId = useSetRecoilState(editCarDialogId);
    const onEditHandler = () => {
        setEditCarDialogId(id)
    }

    return (
        <>
            <button className="btn mr-2" onClick={onEditHandler}>Edit</button>
            <EditCarDialog id={id}/>
        </>
    )
}
