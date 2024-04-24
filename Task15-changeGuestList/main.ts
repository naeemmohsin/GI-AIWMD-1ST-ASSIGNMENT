let dinner_invitation: string[] = ['Waqas', 'Hafeez','Majid', 'Mohsin'];
let message=' I would like to invite you on dinner in my house at 9:00 PM \t\nRegards\nMuhammad Naeem Mohsin\n'
for(let i=0; i<dinner_invitation.length; i++){
console.log(`Mr.${dinner_invitation[i]}${message}`);
}
let absent_person: string='Waqas'
let new_person: string='Imran'
dinner_invitation[0]=new_person
for(let i=0; i<dinner_invitation.length; i++){
    console.log(`Mr.${dinner_invitation[i]}${message}`);
    }
    console.log(`Mr.${absent_person} will not come to attend the dinner.`);