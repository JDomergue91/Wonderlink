const mongoose = require("mongoose");


const environnementSchema = new mongoose.Schema({
    envType: String,
    link: String,
});
          
const outilSchema = new mongoose.Schema({
    name: String,
    img: String,
    environnementsDisponibles: [environnementSchema],
});
          
    const wonderLinkSchema = new mongoose.Schema({
    name: String,
    img: String,
    outils: [outilSchema],
    });
          
const Wonderlink = mongoose.model('Wonderlink', wonderLinkSchema);
          
    
module.exports = Wonderlink;