/**
 * Understanding Data Types in JavaScript:
 * ---------------------------------------
 * In JavaScript, values are either objects or primitive types.
 * 
 * Object Example:
 */
let objectExample = {
    name: 'Jack'
};
 
/**
 * Primitive Types:
 * ----------------
 * 1. Number Data Type:
 *    a. In JavaScript, every number value is a floating-point number.
 *    b. Unlike many other programming languages, JavaScript does not distinguish between integers and floats.
 */
let age = 30;
let height = 5.9;

/**
 * 2. String Data Type:
 *    - Represents a sequence of characters and is used for text.
 * 
 * Example:
 */
let firstName = 'Jack';

/**
 * 3. Boolean Data Type:
 *    - Represents logical values that can be either true or false.
 * 
 * Example:
 */
let fullAge = true;

/**
 * 4. Undefined Data Type:
 *    - Represents a value taken by a variable that is declared but not yet defined (an 'empty value').
 * 
 * Example:
 */
let children;
console.log(children); // Output: undefined
console.log(typeof children); // Output: undefined

/**
 * 5. Null Data Type:
 *    - Represents an explicitly assigned 'empty value'.
 * 
 * Example:
 */
let pet = null;

/**
 * 6. Symbol (ES2015):
 *    - Represents a unique and non-modifiable value. (More details not covered in this example.)
 * 
 * 7. BigInt (ES2020):
 *    - Represents integers larger than the Number type can hold.
 * 
 * Dynamic Typing:
 * ---------------
 * - JavaScript has dynamic typing, meaning the type of a value is determined automatically.
 * - Variables can change their type during runtime.
 * 
 * Example:
 */
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = 'we change the type of the value from boolean to string';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
