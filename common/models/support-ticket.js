/* eslint-disable max-len */
/* eslint-disable indent */
'use strict';
const app = require('../../server/server');

module.exports = function(SupportTicket) {
    SupportTicket.remoteMethod('getTicket', {
        accepts: [
          {arg: 'options', type: 'object', http: 'optionsFromRequest'},
        ],
        returns: [
          {arg: 'data', type: 'array'},
        {arg: 'Content-Type', type: 'string', http: {target: 'header'}},
      ],
        http: {'verb': 'get', 'path': '/getTicket'},
      });
    SupportTicket.getTicket = (options, cb) => {
        const userId = options.accessToken.__data.userId;
        app.models.RoleMapping.findOne({where: {principalid: userId}, include: 'role'},
        function(err, appUserRole) {
            if (err) return cb(err);
            if (!appUserRole) console.log(cb());
            if (appUserRole.role().name === 'admin') {
              app.models.SupportTicket.find({where: {status: true}},
                function(err, success) {
                    if (err) return cb();
                    return success;
                });
            } else {
              app.models.SupportTicket.find({where: {appUserId: userId, status: true}},
                function(err, success) {
                    if (err) return cb();
                    return success;
                });
            }
            return cb();
        });
    };
    SupportTicket.remoteMethod('closeTicket', {
      accepts: [
        {arg: 'data', type: 'object', required: true, http: {source: 'body'}},
        {arg: 'options', type: 'object', http: 'optionsFromRequest'},
      ],
      description: 'role user change with success',
      http: {'verb': 'put', 'path': '/closeTicket'},
    });
    SupportTicket.closeTicket = (data, options, cb) => {
    if (!data) return cb();
    app.models.SupportTicket.upsertWithWhere({id: data.id}, data, function(error, success) {
      if (error) return cb();
      return success();
    });
    cb();
  };
};
