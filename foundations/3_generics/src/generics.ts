let names: Array<string> = ["Granny", "Nanny", "Magrat"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = 'Sam Vimes';
store.isAdmin = true;

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const ids = merge(123, 456);
console.log(ids);

function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}

const merged = mergeObj({ name: 'Sam' }, { age: 48 });

class User<T> {
    constructor(public id: T) {}
}

const user1 = new User<number>(123);
const user2 = new User<string>('abc');