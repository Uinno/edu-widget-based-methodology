"use client"

import {HTMLAttributes} from "react";
import {useDeleteCarConfirmationDialogUI} from "./hooks/useDeleteCarConfirmationDialogUI";
import clsx from "clsx";
import {DeleteCarConfirmationDialog} from "./components/DeleteCarConfirmationDialog";

export const DeleteCarButton = ({id, className, ...rest}: { id: string } & HTMLAttributes<HTMLButtonElement>) => {
    const {openDeleteCarButtonConfirmationDialog} = useDeleteCarConfirmationDialogUI(id);

    return (
        <>
            <button className={clsx("btn", "btn-error", className)}
                    onClick={openDeleteCarButtonConfirmationDialog}
                    {...rest}
            >
                Delete
            </button>
            <DeleteCarConfirmationDialog id={id}/>
        </>
    )
}
