/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let rem = a;
  if (a <= b) {
    rem = b;
  }
  if (rem >= c) return rem;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x + queen.y === king.x + king.y ||
    queen.x - queen.y === king.x - king.y
  )
    return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    ((a === b && a + b > c) ||
      (a === c && a + c > b) ||
      (b === c && b + c > a)) &&
    a !== 0 &&
    b !== 0 &&
    c !== 0
  )
    return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const arr = [];
  let s = '';
  let result;
  if (num < 10) arr[0] = num;
  else {
    arr[1] = num % 10;
    arr[0] = num - arr[1];
  }
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case 1:
        result = 'I';
        break;
      case 2:
        result = 'II';
        break;
      case 3:
        result = 'III';
        break;
      case 4:
        result = 'IV';
        break;
      case 5:
        result = 'V';
        break;
      case 6:
        result = 'IV';
        break;
      case 7:
        result = 'VII';
        break;
      case 8:
        result = 'VIII';
        break;
      case 9:
        result = 'IX';
        break;
      case 10:
        result = 'X';
        break;
      case 20:
        result = 'XX';
        break;
      case 30:
        result = 'XXX';
        break;
      default:
        result = '';
    }
    s += `${result}`;
  }
  return s;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result;
  let res;
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.':
        result = 'point';
        break;
      case ',':
        result = 'point';
        break;
      case '-':
        result = 'minus';
        break;
      case '0':
        result = 'zero';
        break;
      case '1':
        result = 'one';
        break;
      case '2':
        result = 'two';
        break;
      case '3':
        result = 'three';
        break;
      case '4':
        result = 'four';
        break;
      case '5':
        result = 'five';
        break;
      case '6':
        result = 'six';
        break;
      case '7':
        result = 'seven';
        break;
      case '8':
        result = 'eight';
        break;
      case '9':
        result = 'nine';
        break;
      default:
        result = 'error';
    }
    res += `${result}+ ' '`;
  }
  let arrs = [];
  for (let i = 0; i < res.length - 1; i += 1) {
    arrs += `${res[i]}`;
  }
  return arrs;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const num1 = String(num);
  for (let i = 0; i < num1.length; i += 1) {
    if (num1[i] !== digit) return false;
  }
  return true;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (!arr.length) {
    return -1;
  }
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i += 1) {
    right += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }
  let ifirst = 0;
  let ilast = size - 1;
  let jfirst = 0;
  let jlast = size - 1;
  let count = 1;

  while (ifirst <= ilast && jfirst <= jlast) {
    for (let i = ifirst; i <= ilast; i += 1) {
      arr[jfirst][i] = count;
      count += 1;
    }
    jfirst += 1;
    for (let j = jfirst; j <= jlast; j += 1) {
      arr[j][ilast] = count;
      count += 1;
    }
    ilast -= 1;

    for (let k = ilast; k >= ifirst; k -= 1) {
      arr[jlast][k] = count;
      count += 1;
    }
    jlast -= 1;
    for (let l = jlast; l >= jfirst; l -= 1) {
      arr[l][ifirst] = count;
      count += 1;
    }
    ifirst += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = [];
  const ind = matrix.length;
  for (let i = 0; i < ind; i += 1) {
    arr[i] = [];
    for (let j = 0; j < ind; j += 1) {
      arr[i][j] = matrix[i][j];
    }
  }
  const current = matrix;
  for (let i = 0; i < ind; i += 1) {
    for (let j = 0; j < ind; j += 1) {
      current[i][j] = arr[ind - 1 - j][i];
    }
  }
  return current;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const arrNew = arr;
  for (let i = 0; i < arr.length; i += 1) {
    let ind = i;
    let curr = arrNew[i];
    for (let j = i; j < arr.length; j += 1) {
      if (arrNew[j] < curr) {
        curr = arrNew[j];
        ind = j;
      }
    }
    arrNew[ind] = arrNew[i];
    arrNew[i] = curr;
  }
  return arrNew;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const l = str.length;
  const leng = Math.floor(l / 2);
  const array = [];
  const array1 = [];

  for (let i = 0; i < l; i += 1) {
    array[i] = str[i];
  }
  for (let k = 0; k < iterations; k += 1) {
    for (let i = 0; i < l; i += 1) {
      array1[i] = array[i];
    }
    for (let j = 0; j <= leng - 1; j += 1) {
      array[j] = array1[j * 2];
      array[j + leng] = array1[j * 2 + 1];
    }
    if (l % 2 !== 0) array[leng] = array1[l - 1];
  }
  let res = '';
  for (let i = 0; i < l; i += 1) {
    res += array[i];
  }
  return res;
}
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const array = [];
  const str = `${number}`;
  for (let i = 0; i < str.length; i += 1) {
    array[i] = +str[i];
  }
  let m = 0;
  for (let k = 0; k < str.length; k += 1) {
    const count = array[array.length - 1 - k];
    let i = array.length - 1 - k;
    while (i > 0) {
      if (array[i] < count) {
        const x = count;
        array[array.length - 1 - k] = array[i];
        array[i] = x;
        m += 1;
        if (m > 0) {
          for (let l = array.length - 1; l > i; l -= 1) {
            for (let t = i + 1; t < l; t += 1) {
              if (array[t] > array[t + 1]) {
                const temp = array[t];
                array[t] = array[t + 1];
                array[t + 1] = temp;
              }
            }
          }
          let res = '';
          for (let j = 0; j < array.length; j += 1) {
            res += array[j];
          }
          return +res;
        }
      }
      i -= 1;
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
