/**
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
 */

/**
 * DISCLAIMER:
 * I am not responsible in any way of any consequence of the usage of this piece
 * of software. You are warned, use it at your own risks.
 */

const initMatrix = (s1, s2) => {
  /* istanbul ignore next */
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
};

const damerau = (i, j, s1, s2, d, cost) => {
  if (i > 1 && j > 1 && s1[i - 1] === s2[j - 2] && s1[i - 2] === s2[j - 1]) {
    d[i][j] = Math.min.apply(null, [d[i][j], d[i - 2][j - 2] + cost]);
  }
};

const distance = (s1, s2) => {
  if (
    undefined == s1 ||
    undefined == s2 ||
    "string" !== typeof s1 ||
    "string" !== typeof s2
  ) {
    return -1;
  }

  let d = initMatrix(s1, s2);
  /* istanbul ignore next */
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
        d[i - 1][j - 1] + cost,
      ]);

      damerau(i, j, s1, s2, d, cost);
    }
  }

  return d[s1.length][s2.length];
};

const distanceProm = (s1, s2) =>
  new Promise((resolve, reject) => {
    let result = distance(s1, s2);
    if (0 <= result) {
      resolve(result);
    } else {
      reject(result);
    }
  });

const minDistanceProm = (s1, list) =>
  new Promise((resolve, reject) => {
    if (undefined == list || !Array.isArray(list)) {
      reject(-1);
      return;
    } else if (0 === list.length) {
      resolve(distance(s1, ""));
      return;
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

module.exports = {
  distanceProm,
  distance,
  minDistanceProm,
};
