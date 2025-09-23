let userName: string;

// ...

userName = "Casey";


function add(x: number, y: number = 5): number {
    return x + y;
}

const sum = add(5);
console.log(`The sum is: ${sum}`);

let age: string | number = 36;
age = '37';
