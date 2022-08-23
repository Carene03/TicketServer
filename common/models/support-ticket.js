/* eslint-disable max-len */
/* eslint-disable indent */
'use strict';
const app = require('../../server/server');

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
        app.models.RollMapping.findOne({where: {principalid: userId}},
        function(err, appUserRole) {
            if (err) return cb(err);
            if (!appUserRole) return cb();
            const roleId = appUserRole.__data.roleId;
            app.models.Role.find({where: {id: roleId}},
            function(error, success) {
              if (error) return cb(err);
              if (!success) return cb();
              if (success.name === 'admin') {
                return app.models.Supportticket.find();
              } else {
                app.models.Supportticket.find({where: {appUserId: userId}},
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
