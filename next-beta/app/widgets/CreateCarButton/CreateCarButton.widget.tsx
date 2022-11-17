'use client'

import {CreateCarDialogWidget} from "../CreateCarDialog/CreateCarDialog.widget";
import {useSetRecoilState} from "recoil";
import {createCarDialogIsOpen} from "../CreateCarDialog/store/CreateCarDialog.store";

export const CreateCarButtonWidget = () => {

    const setCreateCarDialogIsOpen = useSetRecoilState(createCarDialogIsOpen);

    const onCreateClickHandler = () => setCreateCarDialogIsOpen(true);

    return(
        <>
            <button className="btn" onClick={onCreateClickHandler}>Create</button>
            <CreateCarDialogWidget/>
        </>
    )
}
