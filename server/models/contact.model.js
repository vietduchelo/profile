var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contactSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
   email:{
        type: String,
        required: true
    },
   message: {
        type:String,
        require: true
        
    },

});
var Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
