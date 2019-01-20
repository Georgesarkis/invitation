var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RSVPSchema = new Schema({
    name: { type: String },
    email: { type: String },
    RSVPanswer : { type: Boolean },
    numGuests : { type: Number }
});

module.exports = mongoose.model('RSVP', RSVPSchema);
