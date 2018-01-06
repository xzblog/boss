const express = require('express');
const app = express();

app.get('/api/', function (req, res) {
    res.send('Hello World!');
});

const server = app.listen(9093, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});