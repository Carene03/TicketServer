/* eslint-disable indent */
/* eslint-disable max-len */
'use strict';
const app = require('../../server/server');

module.exports = function(Filef) {
    Filef.remoteMethod('getFile', {
        accepts: [
            {arg: 'condition', type: 'object', required: true, http: {source: 'body'}},
            {arg: 'options', type: 'object', http: 'optionsFromRequest'},
        ],
        description: 'role user change with success',
        http: {'verb': 'get', 'path': '/getFile'},
    });

    Filef.getFile = (condition, options, cb) => {
        const userId = options.accessToken.__data.userId;
        app.models.Filef.find({where: condition},
        function(err, files) {
            if (err) return cb(err);
            return files;
        });
    };
};
