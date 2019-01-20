var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WishesSchema = new Schema({
    FirstName : { type: String },
    LastName : { type: String },
    Wishes : { type:String }
});

module.exports = mongoose.model('Wishes', WishesSchema);
