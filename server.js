var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/users', (request, response) => {
    console.log('worked');
    response.send([{id: 0, name: "item1"}, {id: 1, name: "item2"}]);
});

app.listen(8080);
console.log('server is listening on 8080');
