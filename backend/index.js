const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config()
app.use(cors())

console.log(process.env.NAME);
app.get('/', (req, res) => {
    res.send('KnowLumi Backend');
})

app.listen(5000, () => {
    console.log("Server listening on port 5000");
})