let Places: string[]=['Ireland', 'Switzerland','Paris', 'Pakistan', 'Turkey'];

// Print of array in its original order
console.log(Places);

// Printing my array in alphabetical order without modifying the actual list
console.log([...Places].sort());

// Array still in its original order
console.log(Places);

// Print array in reverse alphabetical order without changing the order of the original list
console.log([...Places].sort().reverse());

// Array is still in its original order
console.log(Places);

// Print array in reverse order without changing the order of the original list
console.log([...Places].sort().reverse());

// Print array in reverse order without changing the order of the original list
console.log([...Places].sort().reverse());