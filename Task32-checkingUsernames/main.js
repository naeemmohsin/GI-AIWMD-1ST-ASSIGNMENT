var current_users = ['naeem', 'waqas', 'bilal', 'NAVEED', 'ASHRAF'];
var new_users = ['mohsin', 'sadiq', 'asif', 'naveed', 'ashraf'];
new_users.forEach(function (newuser) {
    var newuser_lowercase = newuser.toLowerCase();
    if (current_users.map(function (currentusers) { return currentusers.toLowerCase(); }).includes(newuser_lowercase)) {
        console.log("\nThe username is not available, Please try anyother.\n");
    }
    else {
        console.log("\nThe username is available.");
    }
});
