const Markup = require('telegraf/markup');

const buttons = Markup.inlineKeyboard([
    [Markup.button.callback('1M', '1'), Markup.button.callback('2M', '2'), Markup.button.callback('3M', '3'),
    Markup.button.callback('4M', '4'), Markup.button.callback('5M', '5'), Markup.button.callback('6M', '6'),
    Markup.button.callback('7M', '7'), Markup.button.callback('8M', '8'),
    ],
    [Markup.button.callback('1P', '11'), Markup.button.callback('2P', '12'), Markup.button.callback('3P', '13'),
    Markup.button.callback('4P', '14'), Markup.button.callback('5P', '15'), Markup.button.callback('6P', '16'),
    Markup.button.callback('7P', '17'), Markup.button.callback('8P', '18'),
    ],
    [Markup.button.callback('1S', '21'), Markup.button.callback('2S', '22'), Markup.button.callback('3S', '23'),
    Markup.button.callback('4S', '24'), Markup.button.callback('5S', '25'), Markup.button.callback('6S', '26'),
    Markup.button.callback('7S', '27'), Markup.button.callback('8S', '28'),
    ],
    [
        Markup.button.callback('9M', '9'), Markup.button.callback('9P', '19'), Markup.button.callback('9S', '29')
    ],
    [
        Markup.button.callback('White', '10'), Markup.button.callback('Green', '20'), Markup.button.callback('Red', '30')
    ],
    [
        Markup.button.callback('East', '31'), Markup.button.callback('South', '32'), Markup.button.callback('West', '33'),
        Markup.button.callback('North', '34')
    ]
]);

const handTypeButtons = Markup.inlineKeyboard([
    [Markup.button.callback('Closed', 'closed'), Markup.button.callback('Open', 'open')],
]);

const formTypeButtons = Markup.inlineKeyboard([
    [Markup.button.callback('Standard', 'standard'), Markup.button.callback('Seven Pairs', 'chitoi'),
    Markup.button.callback('Pinfu', 'pinfu'), Markup.button.callback('Thirteen Orphans', 'kokushi')
    ],
]);

const winTypeButtons = Markup.inlineKeyboard([
    [Markup.button.callback('Ron', 'ron'), Markup.button.callback('Tsumo', 'tsumo')],
]);

const countButton = Markup.inlineKeyboard([
    [Markup.button.callback('Count', 'count'), Markup.button.callback('Current Choice', 'currentchoice')]
]);

const clearButton = Markup.inlineKeyboard([
    Markup.button.callback('Clear', 'clear')
]);

const bonusMiniPointsButtons = Markup.inlineKeyboard([
    [Markup.button.callback('Open Pon', 'opon'), Markup.button.callback('Closed Pon', 'cpon')],
    [Markup.button.callback('Open Pon TWD', 'opontwd'), Markup.button.callback('Closed Pon TWD', 'cpontwd')],
    [Markup.button.callback('Open Kan', 'okan'), Markup.button.callback('Closed Kan', 'ckan')],
    [Markup.button.callback('Open Kan TWD', 'okantwd'), Markup.button.callback('Closed Kan TWD', 'ckantwd')],
    [Markup.button.callback('Pair of Honors', 'pairh'), Markup.button.callback('One Tile Wait', 'otw')]
]);

const positionButtons = Markup.inlineKeyboard([
    [Markup.button.callback('Dealer', 'dealer'), Markup.button.callback('Not', 'not')]
]);

const hanButtons = Markup.inlineKeyboard([
    [Markup.button.callback('1', 'h1'), Markup.button.callback('2', 'h2'), Markup.button.callback('3', 'h3'), Markup.button.callback('4', 'h4'), Markup.button.callback('5', 'h5')],
    [Markup.button.callback('6-7', 'h6'), Markup.button.callback('8-10', 'h8'), Markup.button.callback('11-12', 'h11'), Markup.button.callback('13+', 'h13')]
]);

module.exports = { buttons, handTypeButtons, formTypeButtons, winTypeButtons, countButton, bonusMiniPointsButtons, clearButton, positionButtons, hanButtons };