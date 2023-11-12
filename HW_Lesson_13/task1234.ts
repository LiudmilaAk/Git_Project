//1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string; // Опциональное поле
    children?: number; // Опциональное поле
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person, который будет соответствовать массиву

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin extends User {
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        occupation: 'Administrator',
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        occupation: 'World saver',
        role: 'World saver'
    }
];

// 3. Напишите анотации типов к этому классу.

type ObjectType = Record<string, any>;

export class ObjectManipulator {
    private obj: ObjectType;

    constructor(obj: ObjectType) {
        this.obj = obj;
    }

    public set(key: string, value: any): ObjectManipulator {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }

    public get(key: string): any {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator {
        const newObj: ObjectType = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): ObjectType {
        return this.obj;
    }
}


// 4. Обеспечьте правильную типизацию для указанных функций.

//#1 Для функции map:

type Mapper<T, U> = (value: T, index: number, array: T[]) => U;

export function map<T, U>(mapper?: Mapper<T, U>): (input?: T[]) => U[];
export function map<T, U>(mapper: Mapper<T, U>, input: T[]): U[];
export function map<T, U>(mapper?: Mapper<T, U>, input?: T[]): U[] | ((input: T[]) => U[]) | typeof map {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): U[] {
            return (subInput || []).map(mapper!);
        };
    }
    return (input || []).map(mapper!);
}


//#2 Для функции filter:

type Filterer<T> = (value: T, index: number, array: T[]) => boolean;

export function filter<T>(filterer?: Filterer<T>): (input?: T[]) => T[];
export function filter<T>(filterer: Filterer<T>, input: T[]): T[];
export function filter<T>(filterer?: Filterer<T>, input?: T[]): T[] | ((input: T[]) => T[]) | typeof filter {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): T[] {
            return (subInput || []).filter(filterer!);
        };
    }
    return (input || []).filter(filterer!);
}


//#3 Для функции add:

export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;
export function add(a?: number, b?: number) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): number {
            return (a || 0) + subB;
        };
    }
    return (a || 0) + (b || 0);
}


