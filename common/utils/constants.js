/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable max-len */
'use strict';

function Constants() { }

Constants.tables = ['Account', 'AppUser', 'Reply', 'SupportTicket', 'Files'];

Constants.roles = [
    {'name': 'admin', 'description': 'admin'},
    {'name': 'user', 'description': 'user'},
];

Constants.accounts = [
    {
        'realm': 'rlm',
        'username': 'carene',
        'email': 'andrisoamiranacaren03@gmail.com',
        'emailVerified': true,
        'password': '123456',
    },
    {
        'realm': 'rlm',
        'username': 'mirana',
        'email': 'andrisoamiranacaren03@gmail.com',
        'emailVerified': true,
        'password': '789123',
    },
];

Constants.appUser = [
    {
        'firstName': 'carene',
        'lastName': 'andrisoa',
        'accountId': 1,
    },
    {
        'firstName': 'mirana',
        'lastName': 'andrisoa',
        'accountId': 2,
    },
];

Constants.roleAccount = [
    {
        'principalType': 'ROLE',
        'principalId': '1',
        'roleId': '1',
    },
    {
        'principalType': 'ROLE',
        'principalId': '2',
        'roleId': '2',
    },
];

module.exports = Constants;