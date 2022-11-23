import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    createCarConfirmationDialogIsOpen,
    createCarDialogIsDirty,
    createCarDialogIsOpen
} from "../store/create-car-dialog.store";


export const useCreateCarDialogUI = () => {
    const isCreateCarDialogOpen = useRecoilValue(createCarDialogIsOpen);

    /**
     * Here we can use simple realization
     * or the useRecoilCallback that commented below
     */
    const isCreateCarDialogDirty = useRecoilValue(createCarDialogIsDirty);
    const setCreateCarConfirmationDialogIsOpen = useSetRecoilState(createCarConfirmationDialogIsOpen);
    const setCreateCarDialogIsOpen = useSetRecoilState(createCarDialogIsOpen)

    const onCreateCarDialogCloseHandler = () => {
        if (isCreateCarDialogDirty) {
            return setCreateCarConfirmationDialogIsOpen(true);
        }
        setCreateCarDialogIsOpen(false)
    }

    // const onCreateCarDialogCloseHandler = useRecoilCallback(({set, snapshot}) => () => {
    //     const isCreateCarDialogDirty = snapshot.getLoadable(createCarDialogIsDirty).getValue();
    //     if (isCreateCarDialogDirty) {
    //         return set(createCarConfirmationDialogIsOpen, true);
    //     }
    //     set(createCarDialogIsOpen, false)
    // })

    return {
        isCreateCarDialogOpen,
        onCreateCarDialogCloseHandler,
    }
}
