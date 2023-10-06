var express = require('express');
var app = express();

app.use(express.static(__dirname))

app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/index.html")
});
app.listen(3000);
module.exports = app