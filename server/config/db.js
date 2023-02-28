const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // code
        await mongoose.connect(process.env.DATABASE_NAME)
        console.log('Connected DB')

    } catch (err) {
        console.log(err)
    }

}

module.exports = connectDB