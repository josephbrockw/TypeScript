import fs from 'node:fs';

// fs.readFileSync();

let userName: string;

userName = "Casey";

console.log(`User name is: ${userName}`);
function add(x: number, y: number = 5): number {
    return x + y;
}

const sum = add(5);
console.log(`The sum is: ${sum}`);