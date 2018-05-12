var router = require('express').Router();
var fs = require('fs');
var path = require('path');
// var contact = require('../models/contact.model')
var contactController = require('../controller/contactController');

module.exports = router;

router.post('/contact', contact)

function contact(req, res, next) {
    var newContact = req.body;
    if (!newContact.name) {
        next({
            statusCode: 400,
            message: "name is required"
        })
    } else if (!newContact.email) {
      
        next({
            statusCode: 400,
            message: "email is required"
        })
    }
        else if (!newContact.message) {
            next({
                statusCode: 400,
                message: "message is required"
            })
    } else {
        contactController.contact(newContact)
            .then(function (contact) {
                return res.send(contact);
            })
            .catch(function (err) {
                next(err);
            })
    }
}
