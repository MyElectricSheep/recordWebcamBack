var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer  = require('multer');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public')); // for serving files

var upload = multer({ dest: __dirname + '/public/uploads/' });

app.post('/api/test', upload.single('userRecordedVideoCV'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send('Yeehaaaaa')
 });


module.exports = app;
