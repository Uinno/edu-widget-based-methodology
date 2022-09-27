export function areObjectValuesFalsy(obj: Object){
    return Object.values(obj).filter(Boolean).length !== 0
}
