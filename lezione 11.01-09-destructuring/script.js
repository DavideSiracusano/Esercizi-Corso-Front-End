// manipolazione dom
const playlistContainer = document.getElementById("playlist");

const playlist = [
  { title: "Song A", artist: "Artist 1", genre: "Rock", duration: 4 },
  { title: "Song B", artist: "Artist 2", genre: "Pop", duration: 3 },
  { title: "Song C", artist: "Artist 3", genre: "Rock", duration: 5 },
  { title: "Song D", artist: "Artist 4", genre: "Jazz", duration: 4 },
  { title: "Song E", artist: "Artist 5", genre: "Pop", duration: 3 },
  { title: "Song F", artist: "Artist 6", genre: "Rock", duration: 5 },
  { title: "Song G", artist: "Artist 7", genre: "Jazz", duration: 4 },
  { title: "Song H", artist: "Artist 8", genre: "Pop", duration: 3 },
  { title: "Song I", artist: "Artist 9", genre: "Rock", duration: 5 },
  { title: "Song J", artist: "Artist 10", genre: "Jazz", duration: 4 },
];

//rest operator funzione
function addSong(...song) {
  const updatePlaylist = [...playlist, ...song];

  return updatePlaylist;
}

const extraSong = [
  { title: "Song C", artist: "Artist 3", genre: "Jazz", duration: 5 },
  { title: "Song D", artist: "Artist 4", genre: "Rock", duration: 6 },
];

const newPlaylist = addSong(...extraSong);

newPlaylist.forEach((song) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${song.title} by ${song.artist}`;
  playlistContainer.appendChild(listItem);
});

//filter per mostrare solo quelle rock
newPlaylist
  .filter((song) => song.genre === "Rock")
  .forEach((song) => {
    console.log(
      `le musiche rock sono: ${song.title} di ${song.artist} e durano ${song.duration} minuti`
    );
  });

//map per mostrare la durata di ogni canzone
newPlaylist.map((song) => {
  console.log(`le musiche della playlist durano ${song.duration} minuti`);
});

//reduce per mostrare la durata totale
const totaleDurata = newPlaylist
  .map((song) => song.duration)
  .reduce((acc, durata) => acc + durata, 0);
console.log(`totale durata playlist: ${totaleDurata}`);

//destrutturazione con funzione per ciclare e stampare
function logSong({ title, artist, genre, duration }) {
  console.log(`🎵 ${title} by ${artist} [${genre}], dura ${duration}`);
}

//creare una nuova playlist con spread e mappandola per aumentare i minuti di 1
newPlaylist.forEach(logSong);

const newPlaylist2 = [...newPlaylist];

newPlaylist2.map((song) => {
  song.duration = song.duration + 1;
  console.log(
    `Adesso 🎵 ${song.title} by ${song.artist} [${song.genre}] dura ${song.duration}`
  );
});
