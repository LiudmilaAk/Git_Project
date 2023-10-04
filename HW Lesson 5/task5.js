//1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

// string + boolean
const sum1 = "Hello" + true; // Converts boolean to string
console.log(sum1); // Result - "Hellotrue"

// string + number
const sum2 = "42" + 10; // Converts number to string
console.log(sum2); // Result - "4210"

// number + boolean
const sum3 = 5 + false; // Converts boolean to number (false = 0)
console.log(sum3); // Result - 5


// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

// string * boolean
const multiplication1 = "Hello" * true; 
console.log(multiplication1); // Result - NaN 

// string * number
const multiplication2 = "42" * 10; // Converts string to number for multiplication
console.log(multiplication2); // Result - 420

// number * boolean
const multiplication3 = 5 * false; // Converts boolean to number (false = 0)
console.log(multiplication3); // Result - 0


//3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

// string / boolean
const division1 = "Hello" / true; 
console.log(division1); // Result - NaN

// string / number
const division2 = "42" / 10; // Converts string to number for division
console.log(division2); // Result - 4.2

// number / boolean
const division3 = 5 / false; 
console.log(division3); // Result - Infinity (division by zero, false = 0)


// 4) Выполнить явное преобразование(number, string, boolean)

//Number 
const value1 = "5";
const value2 = 9;
let sum = Number(value1) + value2;
console.log(sum);  // Result - 14

//String
const value3 = 123;
const str = String(value3);
console.log(str); // Result - "123"

//Boolean
const value4 = "Hello";
const bool = Boolean(value4);
console.log(bool); // Result - true