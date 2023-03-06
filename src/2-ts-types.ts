/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable prefer-const */

let a; // undefined
console.log(typeof a);
let b: boolean;
b = true; // boolean
b = false; // boolean
console.log(typeof b);
let c: number;
c = 1; // number
c = 1.1; // number
console.log(typeof c);
let d: string;
d = 'hello'; // string
d = '1'; // string
console.log(typeof d);
let e: bigint;
e = 100n; // big int (starting ES2020)
e = 10000n;
console.log(typeof e);
let f: symbol;
f = Symbol('Sym'); // symbol  (starting ES2015)
f = Symbol('Sym2');
console.log(typeof f);
let g: () => void;
g = function () {
    // function
    return null;
};
g = function (): number {
    // function
    return 5;
};
console.log(typeof g);
let h: null | undefined;
h = null; // null ( special primitive )
h = undefined; // undefined ( special primitive )
console.log(typeof h);
let i: Record<any, any>;
i = {}; // Object Literal
i = { name: 'John' };
console.log(typeof i);
let j: any[];
j = []; // array
j = [1, 2, 3];
console.log(typeof j);

class Product {
    // class
    //...
}
console.log(typeof Product);
let k = new Product();
k = new Product();
console.log(typeof k);

let z: any;
z = 1; // any
z = 'hello';
z = true;
z = {};
z = [];
console.log(typeof z);

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

function ashiap(a: number, b: number): void {
    return console.log(a + b);
}
console.log(ashiap(1, 2));

// union
let union: string | number;
union = 'hello';
union = 1;
// union = true; // error
console.log(union);

// type aliases
type StringOrNumber = string | number;
let alias: StringOrNumber;
alias = 'hello';
alias = 1;
// alias = true; // error
console.log(alias);
