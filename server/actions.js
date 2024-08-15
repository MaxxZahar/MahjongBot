const funcs = require('./funcs');

function countActions(bot, data) {
    bot.action('dealer', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['dealer'] = true;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('not', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['dealer'] = false;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('closed', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['open'] = false;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('open', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['open'] = true;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('standard', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['form'] = 'standard';
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('pinfu', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['form'] = 'pinfu';
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('chitoi', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['form'] = 'chitoi';
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('ron', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['win'] = 'ron';
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('tsumo', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['win'] = 'tsumo';
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('opon', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Open Pon');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('cpon', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Closed Pon');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('opontwd', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Open Pon TWD');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('cpontwd', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Closed Pon TWD');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('okan', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Open Kan');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('ckan', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Closed Kan');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('okantwd', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Open Kan TWD');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('ckantwd', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Closed Kan TWD');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('pairh', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('Pair of Honors');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('otw', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options.bonuses.push('One Tile Wait');
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h1', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 1;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h2', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 2;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h3', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 3;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h4', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 4;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h5', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 5;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h6', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 6;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h8', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 8;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h11', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 11;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('h13', async (ctx) => {
        try {
            const options = await data.filter((record) => record.id === ctx.chat.id)[0];
            options['han'] = 13;
        } catch (error) {
            await ctx.reply("Please, start the bot first");
        }
    });
    bot.action('count', async (ctx) => {
        try {
            let options = await data.filter((record) => record.id === ctx.chat.id)[0];
            console.log(options);
            console.log(funcs.countMiniPoints(options));
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