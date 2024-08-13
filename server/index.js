const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const buttons = require('./keyboard');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    ctx.reply(`Hi! I'll count your riichi mahjong winning points!`);
});

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('/count', (ctx) => {
//     ctx.reply('Enter your hand.');
// });
bot.command('count', (ctx) => {
    ctx.reply('Enter your hand.', buttons);
    const hand = [];
    for (let i = 1; i < 35; i++) {
        bot.action(String(i), (ctx) => {
            console.log(ctx.callbackQuery.data);
            hand.push(ctx.callbackQuery.data);
            ctx.reply(hand.join(';'));
            const text = "\ud83c\udc21";
            ctx.reply(`${text}`);
        });
    }

});
bot.hears('/number', (ctx) => {
    ctx.reply('Enter a limit');
    bot.on(message, (ctx) => {
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