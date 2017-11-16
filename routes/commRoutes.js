'use strict';
module.exports = function(app){
    var comm = require('../controllers/commController');
    
    app.route('/comms')
        .get(comm.list_all_comms)
        .post(comm.create_a_comm);

    app.route('/comms/:commId')
        .get(comm.read_a_comm)
        .put(comm.update_a_comm)
        .delete(comm.delete_a_comm);
};