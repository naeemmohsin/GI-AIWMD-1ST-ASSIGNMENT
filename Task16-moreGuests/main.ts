let dinner_invitation: string[] = ['Waqas', 'Saud','Majid', 'Mohsin'];
let message='I would like to invite you on dinner in my house at 9:00 PM\nRegards\nMuhammad Naeem Mohsin\n'
for(let i=0; i<dinner_invitation.length; i++){
console.log(`\nMr.${dinner_invitation[i]}, ${message}`);
}
let absent_person: string='Waqas'
let new_person: string='Imran'
dinner_invitation[0]=new_person
for(let i=0; i<dinner_invitation.length; i++){
    console.log(`Mr.${dinner_invitation[i]}, ${message}`);
    }
    console.log(`Mr.${absent_person}, will not attend the dinner.\n`);
    console.log(`Good news,I have found a bigger dinner table. So, I am inviting three more persons.\n`);
    dinner_invitation.unshift('Mudassar');
    dinner_invitation.splice(2,0,'Munawar');
    dinner_invitation.push('Sohail Bilal');
    for(let i=0; i<dinner_invitation.length; i++){
        console.log(`Mr.${dinner_invitation[i]}, ${message}\n`);
        }
