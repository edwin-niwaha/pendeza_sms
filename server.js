require("dotenv").config();
const express = require('express');
const db = require('./db');

// initialize express app
const app = express();

// rest api for the app to use json
app.use(express.json());

// middleware
app.get('/', (req, res) =>{
const response = {"message": "Hello World!"};
res.json(response);
});

// create end-point to post data to incident table
app.post("/child", async (req, res) =>{
const {last_name, first_name, adress, guardian} = req.body;

const result = await db.execute(
    `insert into children (last_name, first_name, adress, guardian)
     values(?,?,?,?)`,
     [last_name, first_name, adress, guardian]
);
res.json({id: result[0].insertId, last_name, first_name, adress, guardian});
});

// run the server
port = process.env.PORT;
app.listen(port, () => {
  console.log(`🚩 listening on port 🙌 ${port} 🙌 🚩`);
});