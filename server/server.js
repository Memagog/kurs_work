const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const app = express();
const errorHandler = require('./middleware/ErrorMiddleware');
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
  }))
  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);
const CONNECTION_URL = "mongodb+srv://Memagog:123456q@cluster0.j5bgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

const start = async () =>{
    try {
      await mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log(`Database is connected`))
      await app.listen(PORT, ()=> console.log(`Running on PORt : ${PORT}`))
    } catch (error) {
      console.log(error.message)
    }
}

start();


