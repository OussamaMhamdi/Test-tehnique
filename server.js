const express = require('express');
const app = express();
const db = require('./Environnement/Connection.js');
var path = require('path')
app.use(express.json());
// se connecter à mongo db
db();
// démarre le serveur express
const Port = 3000;
app.listen(Port, () => console.log('serveur started on ' + Port));

//allow cors 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/user', require('./routes/user.routes'));
app.use('/tache', require('./routes/tache.routes'));