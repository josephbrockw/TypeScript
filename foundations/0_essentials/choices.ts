// enum Role { Admin, Editor, Guest };

// let userRole: Role = Role.Admin;  // 0 => 'admin', 1 => 'read-only', 2 => 'author'
type Role = 'admin' | 'editor' | 'guest';
let userRole: Role = 'guest';
type User = {
    name: 'Casey';
    age: 3;
    role: Role;
};

userRole = 'guest';

let possibleResults: [1 | -1, 1 | -1];  // [1, -1]

possibleResults = [1, -1];
// possibleResults = [1, 2]; // Error: Type '2' is not assignable to type '1 | -1'.

function access(role: Role) {
    console.log(`Access level: ${role}`);
}

