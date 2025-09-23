let hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = ["Max", 1, "Anna", 2];

console.log(users);

let possibleResults: [number, number];  // [1, -1]

possibleResults = [1, -1];
// possibleResults = [1, 2, 3]; // Error: Source has 3 element(s) but target allows only 2.

let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: "Luke",
    age: 1,
    hobbies: ["Sports", "Cooking"],
    role: { description: "child", id: 1 }
}

console.log(user);

// let val: {} = null;  // val can be anything except null and undefined;

let data: Record<string, number | string>;

// data = 'hello'; // Error: Type 'string' is not assignable to type 'Record<string, string | number>'.

data = {
    entry1: 1,
    entry2: 'hello'
}