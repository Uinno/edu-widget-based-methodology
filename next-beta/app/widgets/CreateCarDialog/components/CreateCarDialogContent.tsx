'use client'

import {useCreateCarDialogForm} from "../hooks/useCreateCarDialogForm";
import {useCreateCarMutation} from "../hooks/useCreateCarMutation";
import {useCreateCarDialogContentUI} from "../hooks/useCreateCarDialogContentUI";

const useCreateCarDialogContentState = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isDirty},
    } = useCreateCarDialogForm();

    const onSubmitHandler = useCreateCarMutation(handleSubmit, isDirty);

    const {areControlsDisabled} = useCreateCarDialogContentUI();

    return {
        register,
        errors,
        onSubmitHandler,
        areControlsDisabled,
    } as const;
}

export const CreateCarDialogContent = () => {

    const {
        errors,
        areControlsDisabled,
        onSubmitHandler,
        register
    } = useCreateCarDialogContentState();

    return (
        <>
            <form className="flex flex-col gap-y-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input type="text" className="input input-bordered" {...register('brand')}/>
                    {!!errors.brand && <label className="label-text text-error">{errors.brand.message}</label>}
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
                    {!!errors.year && <label className="label-text text-error">{errors.year.message}</label>}
                </div>
            </form>
            <div className="modal-action">
                <button className={areControlsDisabled ? 'btn btn-disabled' : 'btn'}
                        onClick={onSubmitHandler}>Create
                </button>
            </div>
        </>
    )
}
