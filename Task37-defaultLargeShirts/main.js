// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typeScript'; }
    console.log("\nCreate a ".concat(size, " size T-Shirt having a printed text'").concat(text, "'on it.\n"));
}
;
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a differentmessage.
make_shirt();
make_shirt('medium');
make_shirt('small', 'I love Python');
