let store = {};
store.id = 5;
store.name = "My Store";
store.isOpen = true;
// store.data = { nested: "object" }; // Error: Type '{ nested: string; }' is not assignable to type 'string | number | boolean'.
let roles = ['admin', 'guest', 'editor'];
// roles.push('contributor'); // Error: Argument of type '"contributor"' is not assignable to parameter of type '"admin" | "guest" | "editor"'.
const firstRole = roles[0]; // 'admin' 
export {};
//# sourceMappingURL=advanced.js.map