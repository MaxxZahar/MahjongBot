const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    ctx.reply(`Hi! I'll count your riichi mahjong winning points!`);
});

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));