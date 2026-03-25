// Constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Objeto images
let images = {
    list: [],

    contains: function(title) {
        return this.list.some(img => img.title === title);
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },

    show: function() {
        for (let img of this.list) {
            console.log(`${img.title} (${img.artist}, ${img.date})`);
        }
    },

    clear: function() {
        this.list = [];
    }
};

// Prueba
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);

images.show();

images.clear();
images.show();