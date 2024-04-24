let alien_color: string ='Green';
let message1: string= "The player just earned 5 points for shooting the alien.";
let message2: string= "The player just earned 10 points.";

if(alien_color==='Green')
{
console.log(`${message1}`)
} 
else{console.log(`${message2}`)
};

// Version of this program that runs the else block. 
alien_color='yellow'
if(alien_color==='Green'){
console.log(`${message1}`)
} 
else{
console.log(`${message2}`)
};

// // Version of this program that runs the if block.
alien_color='Pink'
if(alien_color==='Pink')
{
console.log(`${message1}`)
} 
else{
console.log(`${message2}`)
};