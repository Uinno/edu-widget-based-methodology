import {useDeleteCarConfirmationDialogUI} from "../hooks/useDeleteCarConfirmationDialogUI";
import clsx from "clsx";
import {useDeleteCarMutation} from "../hooks/useDeleteCarMutation";

export const DeleteCarConfirmationDialog = ({id}: { id: string }) => {
    const {
        isDeleteCarButtonConfirmationDialogOpen,
        closeDeleteCarButtonConfirmationDialog,
        areControlsDisabled
    } = useDeleteCarConfirmationDialogUI(id)
    const onDeleteHandler = useDeleteCarMutation(id)

    if(!isDeleteCarButtonConfirmationDialogOpen) return  null;

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <h3 className="font-bold text-lg mb-5">Edit car</h3>
                <p className="py-4">Form contains unsaved data. Please confirm action.</p>
                <div className="modal-action">
                    <button className={clsx("btn", "btn-secondary", {"btn-disabled": areControlsDisabled})}
                            onClick={closeDeleteCarButtonConfirmationDialog}>Cancel
                    </button>
                    <button className={clsx("btn", {"btn-disabled": areControlsDisabled})}
                            onClick={onDeleteHandler}>Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}
