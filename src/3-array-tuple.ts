/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
const arr1 = [1, 2, 3, 4];
// square bracket
let arr2: number[];
arr2 = [1, 2, 3, 4];
// generic
let arr3: Array<number>;
arr3 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */
// type inference
const arr4 = ['a', 'b', 'c'];
// square bracket
let arr5: string[];
arr5 = ['q', 'r', 't'];
//generic
let arr6: Array<string>;
arr6 = ['q', 'r', 't'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

//type inference
const arr7 = ['hello', 1, 2, 3];
// square bracket
let arr8: (string | number)[];
arr8 = [1, 2, 3, 'halo'];
//generic
let arr9: Array<number | string>;
arr9 = ['hello', 1, 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

// tidak bisa palkai inference
let list4: [string, number, boolean];
list4 = ['halo', 4, false];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// inline interface
let list5_1: { color: string; index: number }[];
list5_1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

// generic
let list5_2: Array<{ color: string; index: number }>;
list5_2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

// square bracket
let matrix: number[][];
matrix = [
    [1, 2],
    [3, 4],
];

// generic
let matrix2: Array<Array<number | string>>;
matrix2 = [
    [1, 2, 'halo'],
    [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
