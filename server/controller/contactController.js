var fs = require('fs');
var path = require('path');
var Contact = require('../models/contact.model');
module.exports = {
    contact: contact
}
function contact(newContact) {
    var contact = new Contact(newContact);
    return contact.save()
    .then(function (contact) {
        return Promise.resolve(contact);
    })
    .catch(function (err) {
        return Promise.reject(err);
    })
}