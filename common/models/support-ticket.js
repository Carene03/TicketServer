/* eslint-disable max-len */
/* eslint-disable indent */
'use strict';
const app = require('../../server/server');

module.exports = function(SupportTicket) {
    SupportTicket.remoteMethod('getTicket', {
        accepts: [
          {arg: 'options', type: 'object', http: 'optionsFromRequest'},
        ],
        returns: {arg: 'data', type: 'array'},
        http: {'verb': 'get', 'path': '/getTicket'},
      });
    SupportTicket.getTicket = (options, cb) => {
        app.models.RoleMapping.findOne({where: {principalId: options.accessToken.__data.userId}},
        function(err, appUserRole) {
            if (err) return cb(err);
            if (!appUserRole) console.log(cb());
            app.models.Role.findOne({where: {id: appUserRole.roleId}},
              function(err, role) {
                if (err) return cb(err);
                if (role.name === 'admin') {
                  app.models.SupportTicket.find({where: {status: true}},
                    function(err, success) {
                        if (err) return cb();
                        return cb(null, success);
                    });
                } else {
                  app.models.SupportTicket.find({where: {appUserId: options.accessToken.__data.userId, status: true}},
                    function(err, success) {
                        if (err) return cb();
                        return cb(null, success);
                    });
                }
              });
        });
    };
    SupportTicket.remoteMethod('closeTicket', {
      accepts: [
        {arg: 'data', type: 'object', required: true, http: {source: 'body'}},
        {arg: 'options', type: 'object', http: 'optionsFromRequest'},
      ],
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
