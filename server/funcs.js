const BONUSES = require('./consts').BONUSES;

function countMiniPoints(options) {
    if (options.form === 'chitoi') return 25;
    if (options.form === 'pinfu' && options.win === 'tsumo') return 20;
    if (options.form === 'pinfu' && options.win === 'ron') return 30;
    let sum = 20;
    if (options.form === 'standard') {
        if (options.win === 'tsumo') sum += 2;
        if (options.win === 'ron' && !options.open) sum += 10;
        for (const bonus of options.bonuses) {
            sum += BONUSES[bonus];
        }
        return Math.ceil(sum / 10) * 10;
    }
    return 'Wrong choice!';
}

module.exports = { countMiniPoints };