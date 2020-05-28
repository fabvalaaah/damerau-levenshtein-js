# damerau-levenshtein-js

NPM package that calculates synchronously or asynchronously the Damerau-Levenshtein distance between strings.

## Installation

`npm i damerau-levenshtein-js`

## Usage

Call to "distance" or "distanceProm" functions outputs an integer, the calculated Damerau-Levenshtein distance between 2 strings given as parameters. If the result is 0, strings are identical. The higher the result, the less similar strings are. If the result is -1, it means that a problem occurred because of a bad parameter (e.g. null or undefined). Call to "minDistanceProm" function outputs the minimum distance between a string and a list of strings given as parameters.

### Require

```javascript
const dljs = require("damerau-levenshtein-js");
```

### Synchronous Damerau-Levenshtein distance calculation between 2 strings

```javascript
let result = dljs.distance("hello here", "hello there");
```

### Asynchronous Damerau-Levenshtein distance calculation between 2 strings

```javascript
dljs.distanceProm("hello here", "hello there")
        .then((result) => ...)
        .catch((result) => ...);
```

### Asynchronous minimum Damerau-Levenshtein distance calculation between a string and an array of strings

```javascript
let list = ["hello here", "hello there", "world", "world hello"];
dljs.minDistanceProm("hello world", list)
        .then((result) => ...)
        .catch((result) => ...);
```

### Tests

`npm test`

## Disclaimer

I am not responsible in any way of any consequence of the usage of this piece of software. You are warned, use it at your own risks.
