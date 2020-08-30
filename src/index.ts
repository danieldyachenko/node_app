import mongoose, { ConnectionOptions } from "mongoose"
import express, {Express} from 'express'
import todoRoutes from '../src/routes/list'

const PORT: string | number = process.env.PORT || 3000
const URIS: string = 'mongodb+srv://danieldyachenko:sv_Virus93@cluster0.a64g2.mongodb.net/taskList?retryWrites=true&w=majority'

const app: Express = express()

app.use('/api', todoRoutes)

const options: ConnectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const start = async () => {
    try {
        await mongoose.connect(URIS, options)

        app.listen(PORT, () => {
            console.log('Server has been started...')
        })

    } catch (err) {
        console.log(err)
    }
}

start()