var express = require('express');
var app = express();

app.get('/', async (req, res) => {
    app.use(express.static(__dirname + "/public"));
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(3000);
module.exports = app