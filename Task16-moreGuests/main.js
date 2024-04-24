var dinner_invitation = ['Waqas', 'Saud', 'Majid', 'Mohsin'];
var message = 'I would like to invite you on dinner in my house at 9:00 PM\nRegards\nMuhammad Naeem Mohsin\n';
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("\nMr.".concat(dinner_invitation[i], ", ").concat(message));
}
var absent_person = 'Waqas';
var new_person = 'Imran';
dinner_invitation[0] = new_person;
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("Mr.".concat(dinner_invitation[i], ", ").concat(message));
}
console.log("Mr.".concat(absent_person, ", will not attend the dinner.\n"));
console.log("Good news,I have found a bigger dinner table. So, I am inviting three more persons.\n");
dinner_invitation.unshift('Mudassar');
dinner_invitation.splice(2, 0, 'Munawar');
dinner_invitation.push('Sohail Bilal');
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("Mr.".concat(dinner_invitation[i], ", ").concat(message, "\n"));
}
