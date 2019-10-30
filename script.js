/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}, {flags: [14, 51, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6, 14, 51, 6]
 */

const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}, {flags: [14, 51, 6]}];

function getFlags(arr)  {

  let newArr = [];
  let result = [];

  arr.forEach(function (item) {
    newArr.push(item.flags);
  });

  newArr.map(function (item) {
   item.map(function (number) {
     result.push(number);
   });
  });

  return result;
};

var count = getFlags(arr);

console.log(count);


/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
function isObject(obj)  {
  /* your logic here...*/

  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) ) {
    return true;
  }
  else {
    return false;
  }
};


var log = isObject([]);

console.log(log);


/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
function max(arr) {

  var maxCount = -Infinity;

  for ( var i = 0; i < arr.length; i++) {
    if (arr[i] > maxCount) {
      maxCount = arr[i];
    }
  }
  return maxCount;
};

console.log(max([-1, 77, 4]));

/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
function sumElements(arr) {
  /* your logic here...*/

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if(isNaN(i)) {
      arr[i] = 0;
    }
    sum += arr[i];
  }

  return sum;
};


var sumFn = sumElements(['NaN', 7, 9, 10]);
console.log(sumFn);

/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 * @example
 * truncate('It is good weather', 7, '*'); // 'It is *
 */
function truncate(str, length = 0, replacer = '...')  {
  /* your logic here...*/
  return newStr;
};



/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
function turnMeBaby(str) {
  /* your logic here...*/

  return newStr;
};


/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 * twoSums([5, 9, 3], 8); // [5, 3]
 */
function twoSums(arr, base) {
  /* your logic here...*/
  return newArr;
};









