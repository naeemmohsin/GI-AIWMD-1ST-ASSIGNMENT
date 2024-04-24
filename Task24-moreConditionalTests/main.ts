// Extension of exercise 24.

// Tests for equality and inequality with strings: (Part-1)
let transport1: string='Hiace';
let transport2: string='Hiace';
let transport3: string='Train';

// Equality Test With Strings
console.log('\nEquality Test With Strings:',transport1===transport2);
// Inequality Test With Strings
console.log('\nEquality Test With Strings:',transport1===transport3);

// Tests using the lower case function: (Part-2)
let word1:string='NAEEM';
let word2:string='naeem';

// Equality test using lower lower case function
console.log("\nEquality test using lower lower case function:",word1.toLowerCase()===word2);
// Inequality test using lower lower case function
console.log("\nInequality test using lower lower case function:",word1.toLowerCase() !=word2);


// Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to. (P-3)
let int1:number=5;
let int2:number=7;
let int3:number=5;

// Numerical tests involving equality
console.log('\nNumerical tests involving equality:',int1===int3);
// Numerical tests involving inequality
console.log('\nNumerical tests involving inequality:',int1!=int2);


// Numerical test involving greater than condition
console.log('\nNumerical tests involving greater than condition:',int2>int3);
// Numerical test involving less than condition
console.log('\nNumerical tests involving less than condition:',int1<int2);


// Numerical test involving greater than or equal to, condition
console.log('\nNumerical tests involving less than condition:',int1>=int3);
// Numerical test involving less than or equal to, condition
console.log('\nNumerical tests involving less than condition:',int1<=int2,`\n`);