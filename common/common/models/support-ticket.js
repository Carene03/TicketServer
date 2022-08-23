/* eslint-disable max-len */
/* eslint-disable indent */
'use strict';
const app = require('../../server/server');
const RoleMapping = app.models.RoleMapping;
const SupportticketModel = app.models.Supportticket;

module.exports = function(Supportticket) {
    Supportticket.remoteMethod('getTicket', {
        accepts: [
          {arg: 'options', type: 'object', http: 'optionsFromRequest'},
        ],
        description: 'role user change with success',
        http: {'verb': 'get', 'path': '/getTicket'},
      });
    Supportticket.getTicket = (options, cb) => {
        const userId = options.accessToken.__data.id;
        RoleMapping.findOne({where: {principalid: userId}},
        function(err, appUserRole) {
            if (err) return cb(err);
            if (!appUserRole) console.log(cb());
            const roleId = appUserRole.__data.roleId;
            app.models.Role.find({where: {id: roleId}},
            function(error, success) {
              if (error) return cb(err);
              if (!success) return cb();
              if (success.name === 'admin') {
                SupportticketModel.find({where: {status: true}},
                    function(err, success) {
                        if (err) return cb();
                        return success;
                    });
              } else {
                SupportticketModel.find({where: {appUserId: userId, status: true}},
                    function(err, success) {
                        if (err) return cb();
                        return success;
                    }
                );
              }
            });
        });
    };
};
