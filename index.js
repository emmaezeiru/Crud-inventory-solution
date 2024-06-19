require('dotenv').config();
const  express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const {Schema} = mongoose;

const ItemSchema = new Schema({
    items: {
        type: String
    },
    price: Number, 
    quantity: Number
});
const Item = mongoose.model("Item", ItemSchema);

app.use(cors())
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.post("/api/item", async(req, res)=>{
    const itemObj = new Item({
        items: req.body.items,
        quantity: req.body.quantity,
        price: req.body.price,
    })
    const items = await itemObj.save()
    res.json(items)
});


app.patch("/api/item/:id", async (req, res) => {
    const itemUpdate = await res.itemObj.save();
    res.json(itemUpdate);
});


app.delete("/api/item/:id", async (req, res) =>{
    await res.itemObj.remove();
    res.json({message: "deleted item"});
});









app.listen(port, () =>{
    console.log(`i am listening on ${4000}`);
});