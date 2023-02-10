const express = require("express");
const app = express();
const port = 3001;


app.get("/", (req, res) => {
    res.send("Home Page");
})

app.get("/user/get", (req, res) => {
    res.json([
        {name : "kaosar", age : 25},
        {name : "ahamed", age : 26}
    ]);
});


app.post("/user/create", (req, res) => {
    res.send("user create sucessfull");
})

app.listen(port, () => {
    console.log(`app is runnit at http://localhost:${port}`)
});


