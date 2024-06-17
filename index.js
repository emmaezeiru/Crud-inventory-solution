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
    }
});
const Item = mongoose.model("Item", ItemSchema);

const InventorySchema = new Schema({
    item_id: {
        type: String, required: true
    },
    price: Number, 
    quatity: Number
})
const Inventory = mongoose.model("Inventory", InventorySchema);

app.use(cors())
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.post("/api/item", async(req, res)=>{
    const itemObj = new Item({
        items: req.body.items
    })
    const items = await itemObj.save()
    res.json(items)
})



//app.get("", req, res => {
    //res.json()
//})

//app.put("", req, res => {
    //res.json()
//})

//app.delete("", (req, res) =>{
    //res.json()
//})








app.listen(port, () =>{
    console.log(`i am listening on ${4000}`);
});