module.exports = function reverse(n) {
    var stringa = String(n);
    var result = "";
    for (let i = stringa.length - 1; i >= 0; i--) result += stringa[i];
    return result;
};
