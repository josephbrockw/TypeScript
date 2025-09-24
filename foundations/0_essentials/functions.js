function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
// never type is used for functions that never return
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function performJob(cb) {
    // ...
    cb();
}
function printResult(a, b, cb) {
    console.log(`Result: ${cb(a, b)}`);
}
printResult(5, 10, add);
printResult(5, 10, multiply);
export {};
//# sourceMappingURL=functions.js.map