//Exercice 1
const playlist = {
    nb_tracks : 125,
    display: function() {
        return (`this playlist contains ${playlist.nb_tracks} tracks.`);
    }
};

console.log(playlist.nb_tracks)
console.log(playlist.display())

let soustraction = 15

let resultat = playlist.nb_tracks -= soustraction

console.log(resultat)
console.log(playlist.display())

let addition = 10

let resultat_2 = playlist.nb_tracks += addition

console.log(resultat_2)
console.log(`Maintanant, j'ai ${playlist.nb_tracks} dans ma playlist`)