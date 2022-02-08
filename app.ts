import express from 'express';
import routes from './routes';
import 'dotenv/config';


const app = express();
const port = process.env.PORT || 4000;

app.use('/routes', routes)

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`);
})