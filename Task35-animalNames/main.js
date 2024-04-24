var animal_names = ['goat', 'sheep', 'cow', 'buffalo', 'camel'];
for (var _i = 0, animal_names_1 = animal_names; _i < animal_names_1.length; _i++) {
    var animals = animal_names_1[_i];
    console.log("\n", animals);
}
;
// Modify your program to print a statement about each animal.
for (var _a = 0, animal_names_2 = animal_names; _a < animal_names_2.length; _a++) {
    var animals = animal_names_2[_a];
    console.log("\nThe ".concat(animals, " is a great source of milk."));
}
;
// Add a line at the end of your program stating what these animals have in common.
console.log("\nThese animals are a source of milk for human beings and also are great pets");
