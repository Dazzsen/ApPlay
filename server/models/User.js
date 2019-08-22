const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['INVITADO', 'REGISTRADO', 'ADMIN'],
        default: 'INVITADO'
    }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User