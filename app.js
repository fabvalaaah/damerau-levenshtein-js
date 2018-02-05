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
 * File:   app.js
 * Author: Fabvalaaah
 *
 * 02/01/2018
 */

'use strict';

function initMatrix(s1, s2) {
    if (undefined == s1 || undefined == s2) {
        return null;
    }

    let d = [];
    for (let i = 0; i <= s1.length; i++) {
        d[i] = [];
        d[i][0] = i;
    }
    for (let j = 0; j <= s2.length; j++) {
        d[0][j] = j;
    }

    return d;
}

function damerau(i, j, s1, s2, d, cost) {
    if (i > 1 && j > 1 && s1[i - 1] === s2[j - 2] && s1[i - 2] === s2[j - 1]) {
        d[i][j] = Math.min.apply(null, [
            d[i][j],
            d[i - 2][j - 2] + cost
        ]);
    }
}

function distance(s1, s2) {
    if (undefined == s1 || undefined == s2 || 'string' !== typeof s1
            || 'string' !== typeof s2) {
        return -1;
    }

    let d = initMatrix(s1, s2);
    if (null === d) {
        return -1;
    }
    for (var i = 1; i <= s1.length; i++) {
        let cost;
        for (let j = 1; j <= s2.length; j++) {
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                cost = 0;
            } else {
                cost = 1;
            }

            d[i][j] = Math.min.apply(null, [
                d[i - 1][j] + 1,
                d[i][j - 1] + 1,
                d[i - 1][j - 1] + cost
            ]);

            damerau(i, j, s1, s2, d, cost);
        }
    }

    return d[s1.length][s2.length];
}

function distanceProm(s1, s2) {
    return new Promise((resolve, reject) => {
        let result = distance(s1, s2);
        if (0 <= result) {
            resolve(result);
        } else {
            reject(result);
        }
    });
}

function minDistanceProm(s1, list) {
    return new Promise((resolve, reject) => {
        if (undefined == list || !Array.isArray(list)) {
            reject(-1);
        } else if (0 === list.length) {
            resolve(distance(s1, ''));
        }
        
        let min = -2;

        list.forEach((s2) => {
            let d = distance(s1, s2);
            if (-2 === min || d < min) {
                min = d;
            }
        });

        if (0 <= min) {
            resolve(min);
        } else {
            reject(min);
        }
    });
}

exports.distanceProm = distanceProm;
exports.distance = distance;
exports.minDistanceProm = minDistanceProm;