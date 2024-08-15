const BONUSES = require('./consts').BONUSES;
const DEALER_TABLE = require('./consts').DEALER_TABLE;
const NOT_DEALER_TABLE = require('./consts').NOT_DEALER_TABLE;

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

function checkOptions(options) {
    const properties = ['dealer', 'open', 'form', 'win', 'han'];
    for (const property of properties) {
        if (!options.hasOwnProperty(property)) return false;
    }
    return true;
}

function getScore(options) {
    if (!checkOptions(options)) return 'Wrong choice!';
    const table = options.dealer ? DEALER_TABLE : NOT_DEALER_TABLE;
    const fu = countMiniPoints(options);
    if (options.han >= 13) {
        return table['yakuman'][options.win];
    }
    else if (options.han >= 11) {
        return table['sanbaiman'][options.win];
    }
    else if (options.han >= 8) {
        return table['baiman'][options.win];
    }
    else if (options.han >= 6) {
        return table['haneman'][options.win];
    }
    else if (options.han >= 5 || (options.han === 4 && fu > 30) || (options.han === 3 && fu > 60)) {
        return table['mangan'][options.win];
    }
    else {
        return table[`${options.han}+${fu}`][options.win];
    }
}

function cleaning(options) {
    options['bonuses'] = [];
    delete options.dealer;
    delete options.open;
    delete options.form;
    delete options.win;
    delete options.han;
}

module.exports = { countMiniPoints, getScore, cleaning };