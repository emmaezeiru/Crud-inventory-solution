require('dotenv').config();
const  express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.use("/public", express.static(__dirname + "/public"));

app.listen(port, () =>{
    console.log(`i am listening on ${4000}`);
});