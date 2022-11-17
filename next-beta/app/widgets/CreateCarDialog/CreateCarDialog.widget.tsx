'use client'

import {CreateCarConfirmationDialog} from "./components/CreateCarConfirmationDialog";
import {EditCarDialogErrorBoundary} from "../../../widgets/EditCarDialog/components/EditCarDialogErrorBoundary";
import {CreateCarDialogContent} from "./components/CreateCarDialogContent";
import {useCreateCarDialogUI} from "./hooks/useCreateCarDialogUI";

const useCreateCarDialogState = () => {

    const {isCreateCarDialogOpen, onCreateCarDialogCloseHandler} = useCreateCarDialogUI()

    return {
        isOpen: isCreateCarDialogOpen,
        onCloseHandler: onCreateCarDialogCloseHandler
    } as const;
}


export const CreateCarDialogWidget = () => {
    const {isOpen, onCloseHandler} = useCreateCarDialogState();

    if(!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onCloseHandler}>✕</label>
                <h3 className="font-bold text-lg mb-5">Edit car</h3>
                <EditCarDialogErrorBoundary>
                    <CreateCarDialogContent/>
                </EditCarDialogErrorBoundary>
            </div>
            <CreateCarConfirmationDialog/>
        </div>
    )
}
