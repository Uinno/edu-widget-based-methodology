import {useRecoilSnapshot} from "recoil";
import {useEffect} from "react";

export const RecoilDebugger = () => {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
        console.debug('Changed Atoms:');
        for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
}
