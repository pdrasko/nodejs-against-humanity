var mongoose = require('mongoose');
// https://github.com/drudge/mongoose-timestamp
var timestamps = require('mongoose-timestamp');


var schema = new mongoose.Schema({
    answer: { type: String, required: true}
});
/*
,

    expansion: { type: Boolean, default: false},

    created_date: { type: Date, default: Date.now, required: true }
    */
// For more info about the Population (ref) see: http://mongoosejs.com/docs/populate.html

//schema.plugin(timestamps);
module.exports = mongoose.model('WhiteCard', schema);