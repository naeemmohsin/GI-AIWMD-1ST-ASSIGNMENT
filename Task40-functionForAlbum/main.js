// Write a function called make_album that builds an Object describing a music album. The function should take in 
// an artist name and an album title, and it should return an Object containing these two pieces of information. 
function make_album(artist, title, tracks) {
    var musicAlbum = {
        artist: artist,
        title: title,
    };
    // if(tracks!== undefined){
    //     musicAlbum.tracks =tracks;
    // }
    return musicAlbum;
}
;
var album1 = make_album('Atif Aslam', 'Doorie');
console.log("\n", album1);
var album2 = make_album('Sajjad Ali', 'Zindagi');
console.log("\n", album2);
var album3 = make_album('Jawad Ali', 'Dosti', 12);
console.log("\n", album3, "\n");
