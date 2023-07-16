const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')

const app = express();

//Conexion a DB
const mongoose = require('mongoose');
//const uri = 'mongodb://127.0.0.1/db-mevn';
const uri = 'mongodb+srv://balh201317:balh201317@cluster0.ztd5zkf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri).then(
    () => { console.log('connect to DB') },
    err => { err }
);

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
//app.get('/', function (req, res) {
//    res.send('Hello world');
//});

app.use('/api', require('./routes/nota.js'))

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('listen on port: ', app.get('port'));
});