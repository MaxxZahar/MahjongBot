const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const buttons = require('./keyboard');
const TILES_DICTIONARY = require('./consts').TILES_DICTIONARY;
const actions = require('./actions');

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
    actions.countActions(bot, data);
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