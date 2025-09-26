let validKey;
validKey = 'name';
validKey = 'age';
// validKey = 'dog'; // Error
function getProp(object, key) {
    const val = object[key];
    if (val === undefined || val === null) {
        throw new Error('No such key');
    }
    return val;
}
const user = {
    name: 'Granny',
    age: 57,
    isAdmin: false
};
const val = getProp(user, 'name'); // val is string
console.log(val);
export {};
//# sourceMappingURL=keyof.js.map