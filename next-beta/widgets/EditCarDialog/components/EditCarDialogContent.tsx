'use client'

import {useEditCarDialogForm} from "../hooks/useEditCarDialogForm";
import {useEditCarMutation} from "../hooks/useEditCarMutation";
import {useDeleteCarMutation} from "../hooks/useDeleteCarMutation";
import {useEditCarDialogContentUI} from "../hooks/useEditCarDialogContentUI";
import clsx from "clsx";

const useEditCarDialogContentState = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useEditCarDialogForm();

    const onSubmitHandler = useEditCarMutation(handleSubmit);
    const onDeleteHandler = useDeleteCarMutation();

    const {areControlsDisabled} = useEditCarDialogContentUI();

    return {
        register,
        errors,
        onSubmitHandler,
        onDeleteHandler,
        areControlsDisabled,
    } as const;
}

export const EditCarDialogContent = () => {

    const {
        errors,
        onDeleteHandler,
        areControlsDisabled,
        onSubmitHandler,
        register
    } = useEditCarDialogContentState();

    return (
        <>
            <form className="flex flex-col gap-y-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input type="text"
                           className={clsx("input input-bordered", {'input-disabled': areControlsDisabled})}
                           {...register('brand')}/>
                    {!!errors.brand && <label className="label-text text-error">{errors.brand.message}</label>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Model</span>
                    </label>
                    <input type="text"
                           className={clsx("input input-bordered", {'input-disabled': areControlsDisabled})}
                           {...register('model')}/>
                    {!!errors.model && <label className="label-text text-error">{errors.model.message}</label>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Year</span>
                    </label>
                    <input type="text"
                           className={clsx("input input-bordered", {'input-disabled': areControlsDisabled})}
                           {...register('year')}/>
                    {!!errors.year && <label className="label-text text-error">{errors.year.message}</label>}
                </div>
            </form>
            <div className="modal-action">
                <button className={clsx('btn btn-error', {'btn-disabled': areControlsDisabled})}
                        onClick={onDeleteHandler}>Delete
                </button>
                <button className={clsx('btn', {'btn-disabled': areControlsDisabled})}
                        onClick={onSubmitHandler}>Edit
                </button>
            </div>
        </>
    )
}
