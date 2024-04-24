// Working with one of the programs from Exercises 14 through 18
// Exercise 14.
var dinner_invitation = ['Waqas', 'Saud', 'Majid', 'Mohsin'];
var message = 'I would like to invite you and three other friends on dinner in my house.';
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("\nMr. ".concat(dinner_invitation[i], ", ").concat(message, "\n"));
}
;
