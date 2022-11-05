'use client'

import {Suspense} from "react";
import {EditCarConfirmationDialog} from "./components/EditCarConfirmationDialog";
import {useEditCarDialogUI} from "./hooks/useEditCarDialogUI";
import {EditCarDialogContent} from "./components/EditCarDialogContent";
import {EditCarDialogLoadingPlaceholder} from "./components/EditCarDialogLoadingPlaceholder";
import {EditCarDialogErrorBoundary} from "./components/EditCarDialogErrorBoundary";

const useEditCarDialogState = ({id}: { id: string }) => {

    const {onCloseHandler, isEditCarDialogOpen} = useEditCarDialogUI({id});

    return {
        onCloseHandler,
        isEditCarDialogOpen
    } as const;
}


export default function EditCarDialog(props: { id: string }) {

    const {
        onCloseHandler,
        isEditCarDialogOpen
    } = useEditCarDialogState(props);

    if (!isEditCarDialogOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onCloseHandler}>✕</label>
                <h3 className="font-bold text-lg mb-5">Edit car</h3>
                <EditCarDialogErrorBoundary>
                    <Suspense fallback={<EditCarDialogLoadingPlaceholder/>}>
                        <EditCarDialogContent/>
                    </Suspense>
                </EditCarDialogErrorBoundary>
            </div>
            <EditCarConfirmationDialog/>
        </div>


    )
}
