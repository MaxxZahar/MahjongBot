const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();
const buttons = require('./keyboard');
const TILES_DICTIONARY = require('./consts').TILES_DICTIONARY;
const funcs = require('./funcs');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    ctx.reply(`Hi! I'll count your riichi mahjong winning points!`);
});

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('/count', (ctx) => {
//     ctx.reply('Enter your hand.');
// });
bot.command('count', (ctx) => {
    let options = { bonuses: [] };
    ctx.reply('Choose hand type', buttons.handTypeButtons);
    ctx.reply('Choose hand form', buttons.formTypeButtons);
    ctx.reply('Choose win type', buttons.winTypeButtons);
    ctx.reply('Bonus points', buttons.bonusMiniPointsButtons);
    ctx.reply('Get result', buttons.countButton);
    ctx.reply('Clear Current Options', buttons.clearButton);
    bot.action('closed', (ctx) => {
        options['open'] = false;
    });
    bot.action('open', (ctx) => {
        options['open'] = true;
    });
    bot.action('standard', (ctx) => {
        options['form'] = 'standard';
    });
    bot.action('pinfu', (ctx) => {
        options['form'] = 'pinfu';
    });
    bot.action('chitoi', (ctx) => {
        options['form'] = 'chitoi';
    });
    bot.action('ron', (ctx) => {
        options['win'] = 'ron';
    });
    bot.action('tsumo', (ctx) => {
        options['win'] = 'tsumo';
    });
    bot.action('opon', (ctx) => {
        options.bonuses.push('Open Pon');
    });
    bot.action('cpon', (ctx) => {
        options.bonuses.push('Closed Pon');
    });
    bot.action('opontwd', (ctx) => {
        options.bonuses.push('Open Pon TWD');
    });
    bot.action('cpontwd', (ctx) => {
        options.bonuses.push('Closed Pon TWD');
    });
    bot.action('okan', (ctx) => {
        options.bonuses.push('Open Kan');
    });
    bot.action('ckan', (ctx) => {
        options.bonuses.push('Closed Kan');
    });
    bot.action('okantwd', (ctx) => {
        options.bonuses.push('Open Kan TWD');
    });
    bot.action('ckantwd', (ctx) => {
        options.bonuses.push('Closed Kan TWD');
    });
    bot.action('pairh', (ctx) => {
        options.bonuses.push('Pair of Honors');
    });
    bot.action('otw', (ctx) => {
        options.bonuses.push('One Tile Wait');
    });
    bot.action('count', (ctx) => {
        console.log(options);
        console.log(funcs.countMiniPoints(options));
        ctx.reply(funcs.countMiniPoints(options));
    });
    bot.action('currentchoice', (ctx) => {
        ctx.reply(JSON.stringify(options));
    });
    bot.action('clear', (ctx) => {
        ctx.reply('Cleared');
        options = { bonuses: [] };
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