'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the comm'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comms', CommSchema);