/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegative = x < 0;
    x = Math.abs(x);
    let reversed = 0;
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    if (reversed > Math.pow(2, 31)) return 0;
    return isNegative ? reversed * -1 : reversed;
};