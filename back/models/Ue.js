const mongoose = require("mongoose");
const Ue = mongoose.model(
  "Ue",
  new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    intitule : {type: String, required: true},
    niveau: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Niveau",
        unique: true
      }
    ],
    enseignant1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enseignant",
    },
    enseignant2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Enseignant",
      }
  })
);
module.exports = Ue;
