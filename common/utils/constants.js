/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable max-len */
'use strict';

function Constants() { }

Constants.tables = ['Account', 'AppUser', 'Reply', 'SupportTicket', 'Filef', 'RoleMapping', 'AccessToken'];

Constants.roles = [
    {'name': 'admin', 'description': 'admin'},
    {'name': 'user', 'description': 'user'},
];

Constants.accounts = [
    {
        'realm': 'rlm',
        'username': 'carene',
        'email': 'andrisoamiranacarene03@gmail.com',
        'emailVerified': true,
        'password': '123456',
    },
    {
        'realm': 'rlm',
        'username': 'mirana',
        'email': 'andrisoamiranacarene03@gmail.com',
        'emailVerified': true,
        'password': '789123',
    },
    {
        'realm': 'rlm',
        'username': 'andrisoa',
        'email': 'andrisoamiranacarene03@gmail.com',
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
    {
        'firstName': 'andrisoa',
        'lastName': 'andrisoa',
        'accountId': 3,
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
    {
        'principalType': 'ROLE',
        'principalId': '3',
        'roleId': '2',
    },
];

Constants.supportTickets = [
    {'title': 'Laurem Ipsum a', 'text': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose', 'appUserId': 1},
    {'title': 'Laurem Ipsum b', 'text': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'appUserId': 1},
    {'title': 'Laurem Ipsum c', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'appUserId': 1},
    {'title': 'Laurem Ipsum d', 'text': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 'appUserId': 1},
    {'title': 'Laurem Ipsum e', 'text': 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful', 'appUserId': 2},
    {'title': 'Laurem Ipsum f', 'text': 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?', 'appUserId': 2},
    {'title': 'Laurem Ipsum g', 'text': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.', 'appUserId': 2},
    {'title': 'Laurem Ipsum h', 'text': 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ', 'appUserId': 2},
    {'title': 'Laurem Ipsum i', 'text': 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.', 'appUserId': 2},
    {'title': 'Laurem Ipsum j', 'text': 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. ', 'appUserId': 3},
    {'title': 'Laurem Ipsum k', 'text': 'The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.', 'appUserId': 3},
    {'title': 'Laurem Ipsum l', 'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'appUserId': 3},
    {'title': 'Laurem Ipsum m', 'text': 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'appUserId': 3},
    {'title': 'Laurem Ipsum n', 'text': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.', 'appUserId': 3},
    {'title': 'Laurem Ipsum o', 'text': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', 'appUserId': 1, 'status': false},
    {'title': 'Laurem Ipsum p', 'text': 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.', 'appUserId': 2, 'status': false},
    {'title': 'Laurem Ipsum q', 'text': 'he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains', 'appUserId': 3, 'status': false},
];

module.exports = Constants;