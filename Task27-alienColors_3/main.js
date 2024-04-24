var alien_color = 'Green';
var message1 = "The player earned 5 points.";
var message2 = "The player earned 10 points.";
var message3 = "The player earned 15 points.";
//Version 1 of the program
if (alien_color === 'Green') {
    console.log("\n".concat(message1));
}
else if (alien_color === 'Yellow') {
    console.log("".concat(message2));
}
else if (alien_color === 'Red') {
    console.log("".concat(message3));
}
;
//Version 2 of the program
alien_color = 'Yellow';
if (alien_color === 'Green') {
    console.log("".concat(message1));
}
else if (alien_color === 'Yellow') {
    console.log("\n".concat(message2));
}
else if (alien_color === 'Red') {
    console.log("".concat(message3));
}
;
//Version 3 of the program
alien_color = 'Red';
if (alien_color === 'Green') {
    console.log("".concat(message1));
}
else if (alien_color === 'Yellow') {
    console.log("".concat(message2));
}
else if (alien_color === 'Red') {
    console.log("\n".concat(message3, "\n"));
}
;
