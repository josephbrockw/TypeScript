function add(x: number, y: number) {
    return x + y;
}

console.log(add(2, 3)); // 5

type AddFn = typeof add; // AddFn is (x: number, y: number) => number
type ReturnValueType<T> =  T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnType = ReturnValueType<AddFn>; // AddFnReturnType is number