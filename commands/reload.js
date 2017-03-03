const config = require('../config.json');
module.exports = {

    func: (Client, msg, args) => {
        if(args.length < 1) return msg.sendMessage(`:warning: Must provide a command name to reload.`);
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        msg.reply(`The command ${args[0]} has been reloaded`);
    },
    args: 'put a command as the argument',
    help: `Reload a command, use: ${config.prefix}reload ping`,
}