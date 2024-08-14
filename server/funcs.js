function countMiniPoints(options) {
    if (options.form === 'chitoi') return 25;
    if (options.form === 'pinfu' && options.win === 'tsumo') return 20;
    if (options.form === 'pinfu' && options.win === 'ron') return 30;
    return 'Wrong choice!';
}

module.exports = { countMiniPoints };