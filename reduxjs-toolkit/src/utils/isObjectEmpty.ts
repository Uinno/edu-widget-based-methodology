export function isObjectEmpty(obj: Object){
    if(typeof obj !== 'object') throw new Error('Argument must be an object');
    return Object.keys(obj).length === 0;
}
