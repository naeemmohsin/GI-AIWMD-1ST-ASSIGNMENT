let dinner_invitation: string[] = ['Waqas', 'Saud','Majid', 'Mohsin'];
let message=' I would like to invite you on dinner in my house at 9:00 PM. \t\nRegards,\nMuhammad Naeem Mohsin'

for(let i=0; i<dinner_invitation.length; i++){
   console.log(`\nMr. ${dinner_invitation[i]}${message}`);
}
// let absent_person: string='Waqas'
// let new_person: string='Imran'
// dinner_invitation[0]=new_person

// for(let i=0; i<dinner_invitation.length; i++){
//     console.log(`Mr.${dinner_invitation[i]}${message}`);
// }
//     console.log(`Mr.${absent_person} will not come to attend the dinner.`);
//     console.log(`Good news,We have found a bigger dinner table.So, we are inviting three more persons.`);
   
//     dinner_invitation.unshift('Mudassar');
//     dinner_invitation.splice(2,0,'Munawar');
//     dinner_invitation.push('Sohail Bilal');

// for(let i=0; i<dinner_invitation.length; i++){
//     console.log(`Mr.${dinner_invitation[i]}${message}`);
// }
    console.log(`\nAs dinner table has not arrived in time for the dinner,I can invite only two persons for dinner.\n`)

// Removed guests from my list one at a time until only two names remained in my list.
while(dinner_invitation.length >2){
    let remove_guest = dinner_invitation.pop()
    console.log(`Mr. ${remove_guest} Sorry, I can't invite you for dinner.\n`)
}
// Two people still on my list, letting them know they’re still invited
for(let i=0; i<dinner_invitation.length; i++){
    let message2= ` I am happy to inform you that you are still invited.\n`
    console.log(`Mr. ${dinner_invitation[i]}${message2}`);
}
// Removed the last two names from your list, so I have an empty list Now.
dinner_invitation.splice(0,2);
console.log(dinner_invitation);