type Operations = {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
    multiply: (x: number, y: number) => number;
    divide: (x: number, y: number) => number;
}

type Results<T> = {
    readonly [Key in keyof T]?: number;
}

let mathOperations: Operations = {
    add(x: number, y: number) {
        return x + y;
    },
    subtract(x: number, y: number) {
        return x - y;
    },
    multiply(x: number, y: number) {
        return x * y;
    },
    divide(x: number, y: number) {
        return x / y;
    }
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(2, 3), // 5
    subtract: mathOperations.subtract(5, 3) // 2
}