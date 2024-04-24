// Extension of exercise 24.
// Tests for equality and inequality with strings: (Part-1)
var transport1 = 'Hiace';
var transport2 = 'Hiace';
var transport3 = 'Train';
// Equality Test With Strings
console.log('\nEquality Test With Strings:', transport1 === transport2);
// Inequality Test With Strings
console.log('\nEquality Test With Strings:', transport1 === transport3);
// Tests using the lower case function: (Part-2)
var word1 = 'NAEEM';
var word2 = 'naeem';
// Equality test using lower lower case function
console.log("\nEquality test using lower lower case function:", word1.toLowerCase() === word2);
// Inequality test using lower lower case function
console.log("\nInequality test using lower lower case function:", word1.toLowerCase() != word2);
// Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to. (P-3)
var int1 = 5;
var int2 = 7;
var int3 = 5;
// Numerical tests involving equality
console.log('\nNumerical tests involving equality:', int1 === int3);
// Numerical tests involving inequality
console.log('\nNumerical tests involving inequality:', int1 != int2);
// Numerical test involving greater than condition
console.log('\nNumerical tests involving greater than condition:', int2 > int3);
// Numerical test involving less than condition
console.log('\nNumerical tests involving less than condition:', int1 < int2);
// Numerical test involving greater than or equal to, condition
console.log('\nNumerical tests involving less than condition:', int1 >= int3);
// Numerical test involving less than or equal to, condition
console.log('\nNumerical tests involving less than condition:', int1 <= int2, "\n");
