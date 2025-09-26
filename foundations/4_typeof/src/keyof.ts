type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}

type UserKeys = keyof User; // "name" | "age" | "isAdmin"

let validKey: UserKeys;
validKey = 'name';
validKey = 'age';
// validKey = 'dog'; // Error

function getProp<T extends object, K extends keyof T>(object: T, key: K): T[K] {
    const val = object[key];
    if (val === undefined || val === null) {
        throw new Error('No such key');
    }
    return val;
}


const user: User = {
    name: 'Granny',
    age: 57,
    isAdmin: false
};
const val = getProp(user, 'name'); // val is string
console.log(val);