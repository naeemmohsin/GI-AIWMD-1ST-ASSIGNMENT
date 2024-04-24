var dinner_invitation = ['Waqas', 'Hafeez', 'Majid', 'Mohsin'];
var message = ' I would like to invite you on dinner in my house at 9:00 PM \t\nRegards\nMuhammad Naeem Mohsin\n';
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("Mr.".concat(dinner_invitation[i]).concat(message));
}
var absent_person = 'Waqas';
var new_person = 'Imran';
dinner_invitation[0] = new_person;
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("Mr.".concat(dinner_invitation[i]).concat(message));
}
console.log("Mr.".concat(absent_person, " will not come to attend the dinner."));
