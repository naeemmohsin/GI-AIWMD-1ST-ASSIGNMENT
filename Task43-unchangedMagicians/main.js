var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["shimada", "lumin", "li wei", "lu chen"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magician) {
    magician.forEach(function (element) {
        console.log("\n", element, "\n");
    });
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log("The great ".concat(element), "\n");
    });
}
var copymagician = copyArray(magicians);
make_great(copymagician);
console.log("\n", "This is my original array:", "\n");
show_magicians(magicians);
