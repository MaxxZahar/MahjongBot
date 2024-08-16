const funcs = require('./funcs');

function simpleDataModificationAction(bot, data, callback, option, value) {
    bot.action(callback, async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options[option] = value;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
}

function bonusAdditionAction(bot, data, callback, value) {
    bot.action(callback, async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push(value);
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
}

function countActions(bot, data) {
    simpleDataModificationAction(bot, data, 'dealer', 'dealer', true);
    simpleDataModificationAction(bot, data, 'not', 'dealer', false);
    simpleDataModificationAction(bot, data, 'closed', 'open', false);
    simpleDataModificationAction(bot, data, 'open', 'open', true);
    simpleDataModificationAction(bot, data, 'standard', 'form', 'standard');
    simpleDataModificationAction(bot, data, 'pinfu', 'form', 'pinfu');
    simpleDataModificationAction(bot, data, 'chitoi', 'form', 'chitoi');
    simpleDataModificationAction(bot, data, 'ron', 'win', 'ron');
    simpleDataModificationAction(bot, data, 'tsumo', 'win', 'tsumo');
    bonusAdditionAction(bot, data, 'opon', 'Open Pon');
    bonusAdditionAction(bot, data, 'cpon', 'Closed Pon');
    bonusAdditionAction(bot, data, 'opontwd', 'Open Pon TWD');
    bonusAdditionAction(bot, data, 'cpontwd', 'Closed Pon TWD');
    bonusAdditionAction(bot, data, 'okan', 'Open Kan');
    bonusAdditionAction(bot, data, 'ckan', 'Closed Kan');
    bonusAdditionAction(bot, data, 'okantwd', 'Open Kan TWD');
    bonusAdditionAction(bot, data, 'ckantwd', 'Closed Kan TWD');
    bonusAdditionAction(bot, data, 'pairh', 'Pair of Honors');
    bonusAdditionAction(bot, data, 'otw', 'One Tile Wait');
    simpleDataModificationAction(bot, data, 'h1', 'han', 1);
    simpleDataModificationAction(bot, data, 'h2', 'han', 2);
    simpleDataModificationAction(bot, data, 'h3', 'han', 3);
    simpleDataModificationAction(bot, data, 'h4', 'han', 4);
    simpleDataModificationAction(bot, data, 'h5', 'han', 5);
    simpleDataModificationAction(bot, data, 'h6', 'han', 6);
    simpleDataModificationAction(bot, data, 'h8', 'han', 8);
    simpleDataModificationAction(bot, data, 'h11', 'han', 11);
    simpleDataModificationAction(bot, data, 'h13', 'han', 13);
    bot.action('count', async (ctx) => {
        try {
            let options = await data.filter((record) => record.id === ctx.chat.id)[0];
            const score = funcs.getScore(options);
            await ctx.reply(`Score: ${score}`);
            if (score !== 'Wrong choice!') {
                await ctx.reply("Don't forget renchans");
                funcs.cleaning(options);
            }
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('currentchoice', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            await ctx.reply(JSON.stringify(options));
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('clear', async (ctx) => {
        try {
            let options = await data.filter((record) => record.id === ctx.chat.id)[0];
            await ctx.reply('Cleared');
            funcs.cleaning(options);
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
}

module.exports = { countActions };