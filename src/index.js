const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.json({ message: 'Welcome the first container, doing test docker, hi from docker compose' });
});

app.listen(3000, () => console.log(`Server running on port ${3000}`));
