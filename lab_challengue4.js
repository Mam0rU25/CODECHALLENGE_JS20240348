// Constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Método show agregado con prototype
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
};

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
        this.list.forEach(img => img.show());
    },

    clear: function() {
        this.list = [];
    }
};

// NUEVOS MÉTODOS

images.edit = function(title, artist, date) {
    let img = this.list.find(img => img.title === title);
    if (img) {
        img.artist = artist;
        img.date = date;
    }
};

images.delete = function(title) {
    let index = this.list.findIndex(img => img.title === title);
    if (index !== -1) {
        this.list.splice(index, 1);
    }
};

// Prueba
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);

images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');

images.show();