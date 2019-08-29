const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noticeSchema = new Schema({
    title: { type: String, required: true },
    author: {type: String, required: true },
    plataform: {type: String, required: true },
    genre: {type: String },
    type: {type: String, enum:["Noticia","Analisis"], required: true },
    imageUrl: { type: String, required: true },
    review: { type: String, required: true },
    note: { type: Number },

    best: { type: String, },
    worst: { type: String, }
}, { timestamps: true })


const Notice = mongoose.model('Notice', noticeSchema)
module.exports = Notice