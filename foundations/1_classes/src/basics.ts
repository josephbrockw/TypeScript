class User {
    private _firstName: string = '';
    private _lastName: string = '';

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('First name cannot be empty');
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Last name cannot be empty');
        }
        this._lastName = name;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

const esme = new User();
esme.firstName = 'Esme';
esme.lastName = 'Weatherwax';

const gytha = new User();
gytha.firstName = 'Gytha';
gytha.lastName = 'Ogg';

console.log(esme.fullName);
console.log(gytha.fullName);

class Employee extends User {
    constructor(public jobTitle: string) {
        super();
    }

    work() {
        console.log(`${this.fullName} is working as a ${this.jobTitle}`);
    }
}

const sam = new Employee('Captain of the Guard');
sam.firstName = 'Sam';
sam.lastName = 'Vimes';
sam.work();

abstract class UIElement {
    constructor(public id: string) {}

    clone(targetLocation: string) {
        // logic
    }
}

// let uiElement = new UIElement('id'); // Error: Cannot create an instance of an abstract class.

class SideDrawerElement extends UIElement {
    constructor(id: string, public width: number, public isOpen: boolean) {
        super(id);
    }

    // ...
} 
