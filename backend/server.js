const express = require("express");
const app = express();
const PORT = 8000;
const menu = require("./data/menu.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//test whether the backend is working
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/api/menu", (req, res) => {
    res.send(JSON.stringify(menu));
});

app.post("/api/booking", (req, res) => {
    res.json({ requestBody: req.body });
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`The app is listening at http://localhost:${PORT}`);
});