let userNames:string[]=['admin', 'muhammad', 'naeem','mohsin','waqas'];

for(let i=0; i<userNames.length; i++)
{
if(userNames[i]==='admin'){
    console.log(`\nHello admin, would you like to see a status report?`)
}
else{
    console.log(`\nHello! ${userNames[i]}, thank you for logging in again.\n`)
}
};