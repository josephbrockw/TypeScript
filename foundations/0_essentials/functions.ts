function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

// never type is used for functions that never return
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(cb: () => void): void {
    // ...
    cb();
}

function printResult(a: number, b: number, cb: (a: number, b: number) => number): void {
    console.log(`Result: ${cb(a, b)}`);
}

printResult(5, 10, add);
printResult(5, 10, multiply);