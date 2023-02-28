const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true
    },
    role:{
        type:String,
        default: 'user'
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)