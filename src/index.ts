import mongoose, { ConnectionOptions } from 'mongoose';
import express, { Express } from 'express';
import listRouter from './routes/listRouter';

const PORT = process.env.PORT || 3000;
const URIS =
  'mongodb+srv://danieldyachenko:sv_Virus93@cluster0.a64g2.mongodb.net/taskList?retryWrites=true&w=majority';

const app: Express = express();

app.use('/api', listRouter);

const options: ConnectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose.connect(URIS, options).then(
  () => app.listen(PORT, () => console.log('Server has been started...')),
  err => console.error(err)
);
