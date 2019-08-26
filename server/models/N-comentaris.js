const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nComentarySchema = new Schema({
  comentary: { type: String, required: true },
  user: {type: Schema.Types.ObjectId, ref: "User"}
}, { timestamps: true })


const Ncomentary = mongoose.model('Ncomentary', nComentarySchema)
module.exports = Ncomentary