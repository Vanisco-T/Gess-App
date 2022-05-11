const mongoose = require("mongoose");
const Filiere = mongoose.model(
  "Filiere",
  new mongoose.Schema({
     nom: { type: String, required: true,unique:true,index:true},
   niveau: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Niveau",
      }
    ],
    enseignant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enseignant",
    } 
  })
);
module.exports = Filiere;
