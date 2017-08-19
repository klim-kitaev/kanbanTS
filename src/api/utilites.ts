export function DeepCopy<T>(original:any):T{
    return<T>JSON.parse(JSON.stringify(original));
}
