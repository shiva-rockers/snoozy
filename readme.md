# Snoozy

Snoozy is open-source lightweight utility library delivering modularity.
  - simple to use.
  - zero dependencies.
  - developer-friendly.
  - focus on high performance.

And of course, Snoozy itself is open source with a [public repository](https://github.com/shiva-rockers/snoozy) on GitHub.

### Installation

Snoozy requires [Node.js](https://nodejs.org/) v8+ to run.
```sh
$ npm i snoozy --save
```
### Usage

```sh
const { crypt, dasher, logger, dater, validate } = require('snoozy');
```

## Why Snoozy
Snoozy has useful function written for crypt, dash, logger, time and validate.
 - crypt (Basic and useful encryption functions.)
 - dash (Useful utility function for array and object operations and much more. )
 - logger (Colorful logs.)
 - dater (Useful date and time utility.)
 - validate (Regular data validation checker)

 ## crypt
 - encryptPassword(password)
 - salt
 - base64ToBuffer
 - randomCode

 ## dash
 - parse(jsonString)
 - stringify(json)
 - clone(json)
 - deepClone(json)
 - cloneObject(json)
 - cloneArray(json)
 - pick(object, [paths])
 - omit(object, [paths], deepCloneFlag:Boolean)
 - isEmptyObject(object)
 - toFloatFixed(number)
 - toString(data)
 - sortByKey(array, key)
 - randomizeArray(array)
 - randomBetween(min, max)
 - randomFromArray(array)
 - delay(ttl)
 - emptyCallback(error)
 - errorCallback(error)
  
 ## logger
 - black(content)
 - red(content)
 - green(content)
 - yellow(content)
 - blue(content)
 - magenta(content)
 - cyan(content)
 - white(content)
 - console(content)
 - error(content)
 - warn(content)
 - table(content)
 - info(content)
 - trace(content)
  
 ## dater
 - formattedDate()
 - isoTimeString()
 - getDate(date)
 - addDays(date, days)
 - addMilliseconds(date, milliseconds)
  
 ## validate
 - isEmail()
 - isPassword()

License
----
MIT

**Free Software, Hell Yeah!**