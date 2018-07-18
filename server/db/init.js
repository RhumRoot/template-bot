const mongoose = require('mongoose')

class Init {
    constructor(url) {
        mongoose.connect(url, { useMongoClient: true })
        const connection = mongoose.connection
        connection.on('error', err => console.error('MongoDB connection error:', err))
        connection.once('open', () => console.info('MongoDB is connected'))

        const userSchema = mongoose.Schema({
            id: String,
            username: String,
            first_name: String,
            last_name: String,

            chatUsername: String,
            status: String,

            created: Number,
            lastSeen: Number
        })

        this.User = mongoose.model('User', userSchema)
    }
}

module.exports = Init