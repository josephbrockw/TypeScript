function logger<T extends new (...args: any[]) => any>(target: T, context: any) {
    console.log('logger decorator called');
    console.log('target:', target);
    console.log('context:', context);
    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log('this:', this);
        }
    };
}

@logger
class Person {
    name = "Granny";

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const granny = new Person();
const nanny = new Person();