type DataStore = {
  [key: string]: string | number | boolean;
};

// let someObj: Record<string, number | boolean>;

let store: DataStore = {};

store.id = 5;
store.name = "My Store";
store.isOpen = true;
// store.data = { nested: "object" }; // Error: Type '{ nested: string; }' is not assignable to type 'string | number | boolean'.

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('contributor'); // Error: Argument of type '"contributor"' is not assignable to parameter of type '"admin" | "guest" | "editor"'.
const firstRole = roles[0]; // 'admin' 

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23
} satisfies Record<string, number>;

dataEntries.entry3;