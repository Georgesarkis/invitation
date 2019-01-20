var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema({
    FirstName : { type: String },
    LastName : { type: String },
    Email : { type:String },
    tel : { type: Number },
    Subject : { type: String },
    Message : { type: String }
});

module.exports = mongoose.model('Contact', ContactSchema);
