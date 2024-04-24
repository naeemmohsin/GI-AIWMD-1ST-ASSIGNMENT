var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Places = ['Ireland', 'Switzerland', 'Paris', 'Pakistan', 'Turkey'];
// Print of array in its original order
console.log(Places);
// Printing my array in alphabetical order without modifying the actual list
console.log(__spreadArray([], Places, true).sort());
// Array still in its original order
console.log(Places);
// Print array in reverse alphabetical order without changing the order of the original list
console.log(__spreadArray([], Places, true).sort().reverse());
// Array is still in its original order
console.log(Places);
// Print array in reverse order without changing the order of the original list
console.log(__spreadArray([], Places, true).sort().reverse());
// Print array in reverse order without changing the order of the original list
console.log(__spreadArray([], Places, true).sort().reverse());
