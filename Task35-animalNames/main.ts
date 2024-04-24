let animal_names:string[]=['goat','sheep','cow','buffalo','camel'];

for(let animals of animal_names){
    console.log(`\n`,animals)
};

// Modify your program to print a statement about each animal.

for(let animals of animal_names){
    console.log(`\nThe ${animals} is a great source of milk.`)
};

// Add a line at the end of your program stating what these animals have in common.

console.log(`\nThese animals are a source of milk for human beings and also are great pets.\n`);