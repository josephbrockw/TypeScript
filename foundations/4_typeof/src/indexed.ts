type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[]
}


// type Perms = {
//     id: string;
//     title: string;
//     description: string;
// }[];

type Perms = AppUser['permissions']; // Type is array of permission objects
type Perm = Perms[number]; // Type is a single permission object