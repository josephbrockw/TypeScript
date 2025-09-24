import fs from 'node:fs';
// fs.readFileSync();
let userName;
userName = "Casey";
console.log(`User name is: ${userName}`);
function add(x, y = 5) {
    return x + y;
}
const sum = add(5);
console.log(`The sum is: ${sum}`);
//# sourceMappingURL=app.js.map