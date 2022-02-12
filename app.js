const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
var logger = require('morgan');
require('dotenv').config()

const port = 3000;

const app = express();

//connect to mongo db atlas
connectDB();


const todoRoutes = require("./routes/Todo");

// allow cross origin resource sharing
app.use(cors());

// convert request  into JSON 
app.use(bodyParser.json());

app.use("/api/todo", todoRoutes);


//logger middleware
app.use(logger('dev'));


app.listen(port, () => {
  console.log(`listening in port-${port}`);
});
