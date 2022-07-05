const mongoose = require("mongoose");
const Enseignant = mongoose.model(
  "Enseignant",
  new mongoose.Schema({
    nom: { type: String, required: true},
    prenom: String,
    email: { type: String, required: true,unique:true},
    password :{type:String,required:true},
    role: { type: String,required:true },
    ue: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ue",
        }
      ],
  })
);
module.exports = Enseignant;
