var userNames = ['admin', 'muhammad', 'naeem', 'mohsin', 'waqas'];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log("\nHello admin, would you like to see a status report?");
    }
    else {
        console.log("\nHello! ".concat(userNames[i], ", thank you for logging in again\n"));
    }
}
;
