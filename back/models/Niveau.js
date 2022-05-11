const mongoose = require("mongoose");
const Niveau = mongoose.model(
  "Niveau",
  new mongoose.Schema({
    nom: { type: String, required: true, unique: true },
    ue: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ue",
          unique: true
        }
      ],
  })
);
module.exports = Niveau;
