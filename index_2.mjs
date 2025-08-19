// Exercice 2
let playlist = ["Hometown", "I had some help", "92 Explorer"];
console.log(playlist.length);

playlist.push("Back in black","JCVD");

playlist.forEach(function(song) {
    console.log(song);
});

playlist.pop();
playlist.splice(1,1);
playlist.splice(6,1)
    console.log(playlist)




