module.exports = function reverse(n) {
    return (n + '').split('').filter(el => el != '-').reverse().join('');
};
