'use strict';

var mongoose = require('mongoose');
var Comm = mongoose.model('Comms');

exports.list_all_comms = function(req, res) {
    Comm.find({}, function(err, task){
        if (err)
            res.send(err);
        res.json(comm);
    });
};

exports.read_a_comm = function(req, res) {
    Comm.findById(req.params.commId, function(err, task) {
        if (err)
            res.send(err);
        res.json(comm);
    });
};

exports.update_a_comm = function(req, res) {
    Comm.findOneAndUpdate({_id: req.param.commId}, req.body, {new: true}, function(err, comm) {
        if (err)
            res.send(err);
        res.json(comm);
    });
};

exports.delete_a_comm = function(req, res) {
    Comm.remove({
        _id: req.params.commId
    }, function(err, comm) {
        if (err)
            res.send(err);
        res.json({ message: 'Comm successfully deleted' });
    });
};

