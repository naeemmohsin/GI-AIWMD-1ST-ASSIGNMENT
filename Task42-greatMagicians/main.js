var magicians = ["shimada", "lumin", "li wei", "lu chen"];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log("\n", "The great ".concat(element), "\n");
    });
}
show_magicians(magicians);
