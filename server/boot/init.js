/* eslint-disable eol-last */
/* eslint-disable max-len */
'use strict';

const app = require('../server');
var async = require('async');
var Migration = require('./tables');
const constants = require('../../common/utils/constants');

const Role = app.models.Role;
const Account = app.models.Account;
const AppUser = app.models.AppUser;
const RoleMapping = app.models.RoleMapping;
const SupportTicket = app.models.SupportTicket;

module.exports = () => {
  async.series({
    createTables: (doneTask) => {
      Migration.migrate((err) => {
        return doneTask();
      });
    },
    createRoles: (doneTask) => {
      async.each(constants.roles, (rl, cb) => {
        Role.findOrCreate({where: {name: rl.name}}, rl, (err, created) => {
          if (err) throw err;
          return cb();
        });
      }, (err, success) => {
        if (err) throw err;
        return doneTask();
      });
    },
    createAccount: (doneTask) => {
      async.each(constants.accounts, (account, cb) => {
        Account.findOrCreate({
          where: {username: account.username}}, account, (err, created) => {
            if (err) throw err;
            return cb();
          });
      }, (err, success) => {
        if (err) throw err;
        return doneTask();
      });
    },
    createAppUser: (doneTask) => {
      async.each(constants.appUser, (appUser, cb) => {
        AppUser.findOrCreate({
          where: {firstName: appUser.firstName}}, appUser, (err, created) => {
            if (err) throw err;
            return cb();
          });
      }, (err, success) => {
        if (err) throw err;
        return doneTask();
      });
    },
    createRoleMapping: (doneTask) => {
      async.each(constants.roleAccount, (roleMapping, cb) => {
        RoleMapping.findOrCreate({
          where: {principalId: roleMapping.principalId}}, roleMapping, (err, created) => {
            if (err) throw err;
            return cb();
          });
      }, (err, success) => {
        if (err) throw err;
        return doneTask();
      });
    },
    createSupportTicket: (doneTask) => {
      async.each(constants.supportTickets, (ticket, cb) => {
        SupportTicket.findOrCreate({
          where: {title: ticket.title}}, ticket, (err, created) => {
            if (err) throw err;
            return cb();
          });
      }, (err, success) => {
        if (err) throw err;
        return doneTask();
      });
    },
  }, (err, result) => {
    if (err) throw err;
  });
};
