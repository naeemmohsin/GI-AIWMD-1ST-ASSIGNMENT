
// Write a function called make_album that builds an Object describing a music album. The function should take in 
// an artist name and an album title, and it should return an Object containing these two pieces of information. 

function make_album (artist:string ,title:string,tracks?:number){ 
let musicAlbum:{artist:string, title:string, tracks?:number}=
{ 
    artist:artist,
    title:title,
}
// if(tracks!== undefined){
//     musicAlbum.tracks =tracks;
// }
return musicAlbum;
};

let album1=make_album('Atif Aslam','Doorie');
console.log(`\n`,album1);

let album2=make_album('Sajjad Ali','Zindagi');
console.log(`\n`,album2);

let album3=make_album('Jawad Ali','Dosti', 12);
console.log(`\n`,album3,`\n`);
