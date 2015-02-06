# Store.js

A simple wrapper around the localStorage browser API that allows writing and reading objects by saving everything as JSON strings.

```js
var s = new Store();

// save an object
s.set('an object', {a: 1, b:2});

// retrieve the object
console.log(s.get('an object').a); // logs "1"

// check if an index has been set and is not NULL
console.log(s.exists('nothing here')); // logs "false"

// try to retrieve a value with a fallback value
console.log(s.get('nothing here', 'default value')); // logs "default value"

// set a key to NULL
s.unset('an object');
```
