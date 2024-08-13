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

module.exports = buttons;