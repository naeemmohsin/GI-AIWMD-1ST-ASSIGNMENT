let alien_color: string ='Green';

let message1: string= "The player earned 5 points.";
let message2: string= "The player earned 10 points.";
let message3: string= "The player earned 15 points.";

//Version 1 of the program
if(alien_color==='Green'){
    console.log(`\n${message1}`)

} else if(alien_color==='Yellow'){
    console.log(`${message2}`)

}else if(alien_color==='Red'){
    console.log(`${message3}`)
};

//Version 2 of the program
alien_color='Yellow';

if(alien_color==='Green'){
    console.log(`${message1}`)

} else if(alien_color==='Yellow'){
    console.log(`\n${message2}`)

}else if(alien_color==='Red'){
    console.log(`${message3}`)
};

//Version 3 of the program
alien_color='Red';

if(alien_color==='Green'){
    console.log(`${message1}`)

} else if(alien_color==='Yellow'){
    console.log(`${message2}`)

}else if(alien_color==='Red'){
    console.log(`\n${message3}\n`)
};