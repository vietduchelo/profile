var express = require('express');
var app = express();
var fs = require("fs");
var Contact = require('./models/contact.model');
var bodyParser = require('body-parser');
var router = express.Router();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');

    next();
};
app.use(allowCrossDomain);
var contactRouter = require('./router/contact.route');
var errorHandler = require('./middle-ware/error-handler');
var db = require('./config/db').dbConnect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', contactRouter);
app.use(express.static('client'))
app.use(errorHandler.errorHandler());
app.listen(8081, function () {
    console.log("Ung dung Node.js dang lang nghe tai dia chi: http://localhost:8081");
})