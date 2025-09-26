class User {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('First name cannot be empty');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Last name cannot be empty');
        }
        this._lastName = name;
    }
    get fullName() {
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
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`${this.fullName} is working as a ${this.jobTitle}`);
    }
}
const sam = new Employee('Captain of the Guard');
sam.firstName = 'Sam';
sam.lastName = 'Vimes';
sam.work();
class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
    clone(targetLocation) {
        // logic
    }
}
// let uiElement = new UIElement('id'); // Error: Cannot create an instance of an abstract class.
class SideDrawerElement extends UIElement {
    width;
    isOpen;
    constructor(id, width, isOpen) {
        super(id);
        this.width = width;
        this.isOpen = isOpen;
    }
}
export {};
//# sourceMappingURL=basics.js.map