// Constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Factory
function getImage(title, artist, date) {
    return {
        title: title,
        artist: artist,
        date: date
    };
}

// Datos originales
let images = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "The Last Supper", artist: "Leonardo da Vinci", date: 1495 },
    { title: "Starry Night", artist: "Vincent van Gogh", date: 1889 }
];

// Crear images1 usando constructor
let images1 = images.map(img => new Image(img.title, img.artist, img.date));

// Crear images2 usando factory
let images2 = images1.map(img => getImage(img.title, img.artist, img.date));

// Mostrar images2
for (let img of images2) {
    console.log(`${img.title} (${img.artist}, ${img.date})`);
}