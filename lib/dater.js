/**
 * common time and date functions
 */

module.exports.formattedDate = function() {
    return new Date().toLocaleString('en-us', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
};

module.exports.isoTimeString = function() {
    const today = new Date();
    return today;
};

module.exports.getDate = function(_date = undefined) {
    const date = _date ? new Date(_date) : new Date();
    date.setHours(0, 0, 0, 0);
    const timeOffset = date.getTimezoneOffset() === 0 ? 19800000 : 0;
    // return new Date(date.toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' }));
    return new Date(date - timeOffset);
};

module.exports.addDays = function(date, days) {
    const inputDate = new Date(date);
    return new Date(inputDate.setDate(inputDate.getDate() + days));
};

module.exports.addMilliseconds = function(date, milliseconds) {
    const inputDate = new Date(date);
    return new Date(inputDate.valueOf() + milliseconds);
};