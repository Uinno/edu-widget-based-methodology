'use client'

import EditCarDialogWidget from "../EditCarDialog/EditCarDialogWidget";
import {useEditCarDialogUI} from "../EditCarDialog/hooks/useEditCarDialogUI";
import clsx from "clsx";
import {HTMLAttributes} from "react";

export const EditCarButtonWidget = ({id, className, ...rest}: { id: string } & HTMLAttributes<HTMLButtonElement>) => {
    const {openEditCarDialog} = useEditCarDialogUI({id});

    return (
        <>
            <button className={clsx("btn", "mr-2", className)} {...rest} onClick={openEditCarDialog}>Edit</button>
            <EditCarDialogWidget id={id}/>
        </>
    )
}
