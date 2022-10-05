export function areObjectsEqual<T extends Object>(objA: T, objB: T) {
    for (let key of Object.keys(objA)) {
        if (objA[key as keyof T] != objB[key as keyof T]) return false;
    }

    return true;
}
