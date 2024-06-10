const  express = require('express');
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/index.html")
});

app.listen(port, () =>{
    console.log(`i am listening on ${4000}`);
});