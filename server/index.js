const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const buttons = require('./keyboard');
const TILES_DICTIONARY = require('./consts').TILES_DICTIONARY;
const funcs = require('./funcs');

const bot = new Telegraf(process.env.BOT_TOKEN);

const data = [];

bot.start(async (ctx) => {
    console.log(data);
    ctx.reply(`Hi! I'll count your riichi mahjong winning points!`);
    const filtered = data.filter((record) => record.id === ctx.chat.id);
    if (filtered.length) {
        filtered[0] = { id: ctx.chat.id, bonuses: [] }
    } else {
        data.push({ id: ctx.chat.id, bonuses: [] });
    }
});

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));

bot.telegram.setMyCommands([
    {
        command: 'start',
        description: 'Display welcome message and initialising'
    },
    {
        command: 'count',
        description: 'Lets count your points!'
    },
    {
        command: 'number',
        description: 'Generate random number'
    },
]);

bot.command('count', async (ctx) => {
    await ctx.reply('Choose position', buttons.positionButtons);
    await ctx.reply('Choose hand type', buttons.handTypeButtons);
    await ctx.reply('Choose hand form', buttons.formTypeButtons);
    await ctx.reply('Choose win type', buttons.winTypeButtons);
    await ctx.reply('Bonus points', buttons.bonusMiniPointsButtons);
    await ctx.reply('Enter number of han', buttons.hanButtons);
    await ctx.reply('Get result', buttons.countButton);
    await ctx.reply('Clear Current Options', buttons.clearButton);
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
    // let hand = [];
    // for (let i = 1; i < 35; i++) {
    //     bot.action(String(i), (ctx) => {
    //         console.log(ctx.callbackQuery.data);
    //         hand.push(ctx.callbackQuery.data);
    //         if (hand.length === 14) {
    //             let result = '';
    //             for (const tile of hand) {
    //                 result += TILES_DICTIONARY[tile];
    //             }
    //             ctx.reply(result);
    //             hand = [];
    //         }
    //     });
    // }

});
bot.hears('/number', async (ctx) => {
    ctx.reply('Enter a limit');
    bot.on(message, async (ctx) => {
        const limit = Number(ctx.message.text);
        if (limit) {
            ctx.reply(Math.floor(Math.random() * limit));
        } else {
            ctx.reply('This is an unlucky limit');
        }
    });
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));