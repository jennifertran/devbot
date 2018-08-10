module.exports = function (controller) {

  controller.on('user_channel_join,user_group_join', function (bot, message) {

    bot.reply(message, 'Welcome, <@' + message.user + '>');

  });

  controller.on('team_join', function (bot, message) {

    bot.reply(message, 'Welcome to devClub, <@' + message.user + '>');

  });

};
