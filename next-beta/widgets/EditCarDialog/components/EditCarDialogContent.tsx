'use client'
import {useEditCarDialogForm} from "../hooks/useEditCarDialogForm";
import {useEditCarMutation} from "../hooks/useEditCarMutation";
import {useDeleteCarMutation} from "../hooks/useDeleteCarMutation";
import {useEditCarDialogContentUI} from "../hooks/useEditCarDialogContentUI";

const useEditCarDialogContentState = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isDirty},
    } = useEditCarDialogForm();

    const onSubmitHandler = useEditCarMutation(handleSubmit, isDirty);
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
                    <input type="text" className="input input-bordered" {...register('brand')}/>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Model</span>
                    </label>
                    <input type="text" className="input input-bordered" {...register('model')}/>
                    {!!errors.model && <label className="label-text text-error">{errors.model.message}</label>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Year</span>
                    </label>
                    <input type="text" className="input input-bordered" {...register('year')}/>
                </div>
            </form>
            <div className="modal-action">
                <button className={areControlsDisabled ? 'btn btn-error btn-disabled' : 'btn btn-error'}
                        onClick={onDeleteHandler}>Delete
                </button>
                <button className={areControlsDisabled ? 'btn btn-disabled' : 'btn'}
                        onClick={onSubmitHandler}>Edit
                </button>
            </div>
        </>
    )
}
