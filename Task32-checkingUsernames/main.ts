let current_users: string[]=['naeem','waqas','bilal','NAVEED','ASHRAF'];

let new_users: string[]=['mohsin','sadiq','asif','naveed','ashraf'];

new_users.forEach(newuser=>{

    let newuser_lowercase: string= newuser.toLowerCase();

    if (current_users.map(currentusers=>currentusers.toLowerCase()).includes(newuser_lowercase)){

        console.log(`\nThe username is not available, Please try anyother.\n`)
    }
    else {console.log(`\nThe username is available.`)}
})