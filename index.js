const express = require("express")
const mongoose = require("mongoose")
const todoRoutes = require('./routes/list')

const PORT = process.env.PORT || 3000

const app = express()

app.use('/api', todoRoutes)

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/tasksList',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )

        app.listen(PORT, () => {
            console.log('Server has been started...')
        })

    } catch (err) {
        console.log(err)
    }
}

start()