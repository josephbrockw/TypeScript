type StringArray = string[];
// type ElementType = StringArray[number]; // ElementType is string
// type ElementType<T extends any[]> = T[number]; // Doesn't work with non-arrays
type ElementType<T> = T extends any[] ? T[number] : T; // Works with non-arrays too

type Example1 = ElementType<StringArray>; // Example1 is string
let text = 1;
type Example2 = ElementType<typeof text>; // Example2 is number

type FullNamePerson = {
    firstName: string;
    lastName: string;
};
type fullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): fullNameOrNothing<T> {
    if (
        'firstName' in person && 
        'lastName' in person && 
        person.firstName &&
        person.lastName
    ) {
        return `${person.firstName} ${person.lastName}` as fullNameOrNothing<T>;
    }

    throw new Error('Not a person with firstName and lastName');
}

const name1 = getFullName({ firstName: 'Sam', lastName: 'Vimes' }); // name1 is string
const name2 = getFullName({ firstName: 'Rincewind' }); // Error at runtime
