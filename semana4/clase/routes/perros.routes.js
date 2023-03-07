const express = require('express');

const router = express.Router();

const razas = [
    { 
        raza: "Beagle", 
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        handle: "@beagle",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    {
        raza: "Golden",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        handle: "@golden",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        raza: "Husky",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        handle: "@husky",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        raza: "Chilakil",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        handle: "@chilakil",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        raza: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        handle: "@pug",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    } 
];

router.get('/', (request, response, next) => {
    response.render('lista', {razas: razas});
});

module.exports = router;