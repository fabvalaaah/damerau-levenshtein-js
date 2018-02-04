/*
 * MIT License
 * 
 * Copyright (c) 2018 Fabvalaaah - fabvalaaah@laposte.net
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * DONATION:
 * As I share these sources for commercial use too, maybe you could consider
 * sending me a reward (even a tiny one) to my Ethereum wallet at the address
 * 0x1fEaa1E88203cc13ffE9BAe434385350bBf10868
 * If so, I would be forever grateful to you and motivated to keep up the good
 * work for sure :oD Thanks in advance !
 * 
 * FEEDBACK:
 * You like my work? It helps you? You plan to use/reuse/transform it? You have
 * suggestions or questions about it? Just want to say "hi"? Let me know your
 * feedbacks by mail to the address fabvalaaah@laposte.net
 * 
 * DISCLAIMER:
 * I am not responsible in any way of any consequence of the usage
 * of this piece of software. You are warned, use it at your own risks.
 */

/* 
 * File:   test.js
 * Author: Fabvalaaah
 *
 * 02/03/2018
 */

'use strict';

const dl = require('../app.js');

// Yeah, that's totally an hommage to Vitalik Buterin, founder of Ethereum
// https://twitter.com/VitalikButerin/status/958653430607704064

let s1 = 'VitalikButerin';

// Synchronous distance calculation tests
console.log('');
console.log('*---------------------*');
console.log('|  SYNCHRONOUS TESTS  |');
console.log('*---------------------*');

let s2 = 'VitalikButerin';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalijButerin';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalickButter';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikBularin';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikButeriln';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'cryptobutterin';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitaljkButerin';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikButerinr';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikBukerin';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikButeri';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikButer';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 'VitalikBute';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = '';
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = null;
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = undefined;
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));

s2 = 42;
console.log(s1 + ' ' + s2 + ' ' + dl.distance(s1, s2));
// -------

// Asynchronous (promise) distance calculation tests
// Asynchronous (promise) minimal distance calculation test
console.log('');
console.log('*----------------------*');
console.log('|  ASYNCHRONOUS TESTS  |');
console.log('*----------------------*');

let list = ['VitalikButer', 'cryptobutterin', 'Vitalik', 'VitalikBute',
    'ethereum'];
dl.minDistanceProm(s1, list)
        .then(result => console.log('OK with minimal distance of ' + result))
        .catch(result => console.log('KO with minimal distance of ' + result));

dl.minDistanceProm(s1, [])
        .then(result => console.log('OK with minimal distance of ' + result))
        .catch(result => console.log('KO with minimal distance of ' + result));

dl.minDistanceProm(s1, null)
        .then(result => console.log('OK with minimal distance of ' + result))
        .catch(result => console.log('KO with minimal distance of ' + result));

dl.distanceProm(s1, 'VitalikButerin')
        .then(result => console.log('OK ' + s1 + ' VitalikButerin ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikButerin ' + result));

dl.distanceProm(s1, 'VitalijButerin')
        .then(result => console.log('OK ' + s1 + ' VitalijButerin ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalijButerin ' + result));

dl.distanceProm(s1, 'VitalickButter')
        .then(result => console.log('OK ' + s1 + ' VitalickButter ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalickButter ' + result));

dl.distanceProm(s1, 'VitalikBularin')
        .then(result => console.log('OK ' + s1 + ' VitalikBularin ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikBularin ' + result));

dl.distanceProm(s1, 'VitalikButeriln')
        .then(result => console.log('OK ' + s1 + ' VitalikButeriln ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikButeriln '
                    + result));

dl.distanceProm(s1, 'cryptobutterin')
        .then(result => console.log('OK ' + s1 + ' cryptobutterin ' + result))
        .catch(result => console.log('KO ' + s1 + ' cryptobutterin ' + result));

dl.distanceProm(s1, 'VitaljkButerin')
        .then(result => console.log('OK ' + s1 + ' VitaljkButerin ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitaljkButerin ' + result));

dl.distanceProm(s1, 'VitalikButerinr')
        .then(result => console.log('OK ' + s1 + ' VitalikButerinr ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikButerinr '
                    + result));

dl.distanceProm(s1, 'VitalikBukerin')
        .then(result => console.log('OK ' + s1 + ' VitalikBukerin ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikBukerin ' + result));

dl.distanceProm(s1, 'VitalikButeri')
        .then(result => console.log('OK ' + s1 + ' VitalikButeri ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikButeri ' + result));

dl.distanceProm(s1, 'VitalikButer')
        .then(result => console.log('OK ' + s1 + ' VitalikButer ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikButer ' + result));

dl.distanceProm(s1, 'VitalikBute')
        .then(result => console.log('OK ' + s1 + ' VitalikBute ' + result))
        .catch(result => console.log('KO ' + s1 + ' VitalikBute ' + result));

dl.distanceProm(s1, '')
        .then(result => console.log('OK ' + s1 + '  ' + result))
        .catch(result => console.log('KO ' + s1 + '  ' + result));

dl.distanceProm(s1, null)
        .then(result => console.log('OK ' + s1 + ' ' + null + ' ' + result))
        .catch(result => console.log('KO ' + s1 + ' ' + null + ' ' + result));

dl.distanceProm(s1, undefined)
        .then(result => console.log('OK ' + s1 + ' ' + undefined + ' '
                    + result))
        .catch(result => console.log('KO ' + s1 + ' ' + undefined + ' '
                    + result));

dl.distanceProm(s1, 42)
        .then(result => console.log('OK ' + s1 + ' ' + 42 + ' '
                    + result))
        .catch(result => console.log('KO ' + s1 + ' ' + 42 + ' '
                    + result));
// -------