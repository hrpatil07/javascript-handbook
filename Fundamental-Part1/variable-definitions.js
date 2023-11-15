/**
 * Understanding Mutable and Immutable in JavaScript:
 * -------------------------------------------------
 * 
 * Mutability and Immutability:
 * - Mutable:
 *   A mutable object is one that can undergo changes to its state or value after creation.
 *   In JavaScript, objects created using 'var' or 'let' are mutable.
 *   Example:
 */
let mutableArray = [1, 2, 3];
mutableArray.push(4);
console.log('Mutable Array:', mutableArray); // Output: [1, 2, 3, 4]

/**
 * - Immutable:
 *   An immutable object is one whose state or value remains constant after creation.
 *   In JavaScript, primitive data types (e.g., numbers, strings, booleans) and objects created using 'const'
 *   are immutable. Once assigned, their values cannot be directly altered.
 *   It's important to note that when using 'const', the value must be assigned during declaration.
 *   Example:
 */
const immutableString = 'Hello';
// The following line would result in an error as 'const' prevents reassignment.
// immutableString = 'World'; 
console.log('Immutable String:', immutableString); // Output: Hello

/**
 * Variable Declaration Best Practices:
 * -------------------------------------
 * 
 * - In pre-ES6 (ECMAScript 2015) JavaScript, 'var' was the primary keyword for variable declaration.
 *   Variables declared with 'var' are function-scoped, leading to potential hoisting-related issues.
 *   'var' is also mutable, allowing for both redeclaration and reassignment.
 * 
 * - With ES6, 'let' and 'const' were introduced, offering block-scoping and enhanced predictability.
 *   It is recommended to use 'let' or 'const' over 'var' for clearer and safer variable management.
 * 
 * Example:
 */
var information = 'Using var is not recommended';
console.log(information);

