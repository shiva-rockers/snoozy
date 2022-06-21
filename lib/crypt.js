const crypto = require('crypto');

/**
 * common security functions
 */
 module.exports.encryptPassword = function(password) {
    return crypto
        .createHmac('sha256', config.JWT_SECRET)
        .update(password)
        .digest('hex');
};

module.exports.salt = function(length, type) {
    if (type === 'string') {
        return crypto
            .randomBytes(Math.ceil(length / 2))
            .toString('hex')
            .slice(0, length);
    }

    let min = 1;
    let max = 9;
    for (let i = 1; i < length; i += 1) {
        min += '0';
        max += '9';
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.base64ToBuffer = function(base64) {
    const buffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    const contentType = base64.split(';')[0].split('/')[1];
    return { buffer, contentType };
};

module.exports.randomCode = function(size) {
    // const code = Math.random().toString(32);
    const code = Date.now().toString(36);
    return code.slice(code.length - size);
};
