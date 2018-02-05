# damerau-levenshtein-js
Fast and easy to use NodeJS NPM module that calculates synchronously and
asynchronously (promises) the Damerau-Levenshtein distance between strings. For
example, it can help in detecting fake celebrities accounts created for
scamming.

This is a NodeJS NetBeans project, tested with NodeJS v4.2.6 on Ubuntu Linux
16.04.3 LTS x64.

I remembered this algorithm because of a wise suggestion of Vitalik Buterin on
Twitter: He suggested the usage of metrics to detect the proximity between two
strings to fight against scam/phishing based on fake accounts of celebrities
over the Internet in general and on Twitter in particular.

Here is the tweet -->
https://twitter.com/VitalikButerin/status/958653430607704064

Here is the Damerau-Levenshtein algorithm explanation -->
https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance

## Package installation
Run `npm install damerau-levenshtein-js` to install the package.

## Usage

A call to the "distance" or "distanceProm" functions located in "app.js" returns
an integer that represents the calculated distance between the 2 strings passed
as parameters. If 0 is returned, the strings are identical. The higher the
score, the less similar the strings are. -1 means that a problem occurred
because of a null or undefined parameter. The "minDistanceProm" function returns
the minimum distance between a string and a list of strings passed as
parameters. The returned integer values have the same meanings as for "distance"
and "distanceProm".

### Require
Require the package in the sources:
```javascript
const dl = require('damerau-levenshtein-js');
```

### String distance calculation (synchronous)
```javascript
dl.distance('VitalikButerin', 'VitaljkButerin');
```

### String distance calculation (asynchronous with promise)
```javascript
dl.distanceProm('VitalikButerin', 'VitaljkButerin')
        .then(result => ...)
        .catch(result => ...);
```

### String minimum distance calculation (asynchronous with promise)
```javascript
let list = ['VitalikButer', 'cryptobutterin', 'Vitalik', 'VitalikBute',
    'ethereum'];
dl.minDistanceProm('VitalikButerin', list)
        .then(result => ...)
        .catch(result => ...);
```

### Tests
Run `npm test` from the local module directory to execute the embedded tests
campaign.

DONATION:
As I share these sources for commercial use too, maybe you could consider
sending me a reward (even a tiny one) to my Ethereum wallet at the address
0x1fEaa1E88203cc13ffE9BAe434385350bBf10868
If so, I would be forever grateful to you and motivated to keep up the good work
for sure :oD Thanks in advance !

FEEDBACK:
You like my work? It helps you? You plan to use/reuse/transform it? You have
suggestions or questions about it? Just want to say "hi"? Let me know your
feedbacks by mail to the address fabvalaaah@laposte.net

DISCLAIMER:
I am not responsible in any way of any consequence of the usage of this piece of
software. You are warned, use it at your own risks.