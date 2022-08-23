/* eslint-disable max-len */
'use strict';

const BaseError = require('../utils/baseError');
const app = require('../../server/server');

module.exports = function(Account) {
  Account.afterRemoteError('login', (ctx, next) => {
    app.models.Account.findOne({
      where: {
        username: ctx.args.credentials.username,
      },
      include: 'appUser',
    }, function(error, account) {
      if (error) return next();
      if (!account) return next(BaseError.userDoesNotExist());
      else {
        account.hasPassword(ctx.args.credentials.password, function(err, isMatch) {
          if (err) {
            return next(BaseError.wrongPassword());
          }
          if (isMatch) {
            return next();
          } else {
            if (account.appUser()) {
              let newBadPwdCount = account.appUser().badPasswordCount + 1;
              account.appUser().updateAttributes({
                badPasswordCount: newBadPwdCount,
              }, function(error, success) {
                if (err) return next();
                if (success.locked) {
                  account.accessTokens.destroyAll(function(err) {
                    return next();
                  });
                }
              });
            } else return next();
            return next(BaseError.wrongPassword());
          }
        });
      }
    });
  });
};
