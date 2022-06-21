/**
 * common utility functions
 */
module.exports.parse = function(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return data;
    }
};

module.exports.stringify = function(data, offset = 0) {
    return JSON.stringify(data, null, offset);
};

module.exports.clone = function(data = {}) {
    const originalData = data.toObject ? data.toObject() : data; // for mongodb result operations
    const eType = originalData ? originalData.constructor : 'normal';
    if (eType === Object) return { ...originalData };
    if (eType === Array) return [...originalData];
    return data;
    // return JSON.parse(JSON.stringify(data));
};

module.exports.deepClone = function(data) {
    const originalData = !!data.toObject || !!data._doc ? data._doc : data;
    if (originalData.constructor === Object) return this.cloneObject(originalData);
    if (originalData.constructor === Array) return this.cloneArray(originalData);
    return originalData;
};

module.exports.cloneObject = function(object) {
    const newData = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i += 1) {
        const eType = object[keys[i]] ? object[keys[i]].constructor : 'normal';
        switch (eType) {
            case 'normal':
                newData[keys[i]] = object[keys[i]];
                break;
            case Array:
                newData[keys[i]] = this.cloneArray(object[keys[i]]);
                break;
            case Object:
                newData[keys[i]] = this.cloneObject(object[keys[i]]);
                break;
            default:
                newData[keys[i]] = object[keys[i]];
                break;
        }
    }
    return newData;
};

module.exports.cloneArray = function(array) {
    const newData = [];
    for (let i = 0; i < array.length; i += 1) {
        const eType = array[i] ? array[i].constructor : 'normal';
        switch (eType) {
            case 'normal':
                newData.push(array[i]);
                break;
            case Array:
                newData.push(this.cloneArray(array[i]));
                break;
            case Object:
                newData.push(this.cloneObject(array[i]));
                break;
            default:
                newData.push(array[i]);
                break;
        }
    }
    return newData;
};

module.exports.pick = function(obj, array) {
    const clonedObj = this.clone(obj);
    return array.reduce((acc, elem) => {
        if (elem in clonedObj) acc[elem] = clonedObj[elem];
        return acc;
    }, {});
};

module.exports.omit = function(obj, array, deepCloning = false) {
    const clonedObject = deepCloning ? this.deepClone(obj) : this.clone(obj);
    const objectKeys = Object.keys(clonedObject);
    return objectKeys.reduce((acc, elem) => {
        if (!array.includes(elem)) acc[elem] = clonedObject[elem];
        return acc;
    }, {});
};

module.exports.isEmptyObject = function(obj = {}) {
    return !Object.keys(obj).length;
};

module.exports.toFloatFixed = function(number) {
    return parseFloat(number.toFixed(2));
};

module.exports.toString = function(key) {
    try {
        return key.toString();
    } catch (error) {
        return '';
    }
};

module.exports.sortByKey = function name(array, key) {
    return module.exports.clone(array).sort((a, b) => a[key] - b[key]);
};

module.exports.randomizeArray = function(array = []) {
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i += 1) {
        let randomNumber = Math.floor(Math.random() * arrayLength);
        [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
        randomNumber = Math.floor(Math.random() * arrayLength);
        [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    }
    return array;
};

module.exports.randomBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.randomFromArray = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// module.exports.appendZero = number => (number < 10 ? '0' : '') + number;

module.exports.delay = ttl => new Promise(resolve => setTimeout(resolve, ttl));

module.exports.emptyCallback = (error, response) => {};

module.exports.errorCallback = (error, response) => {
    if (error) console.error(error);
};


