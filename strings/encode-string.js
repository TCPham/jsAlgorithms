/* 
  Given in an alumni interview in 2021.

  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
  // your code here
  let count = 1;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newStr = newStr.concat(str[i]).concat(count);
      count = 1;
    }
  }
  return newStr;
}

const result1 = encodeStr(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = encodeStr(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = encodeStr(str3);
console.log(`${result3} should equal ${expected3}`);

const result4 = encodeStr(str4);
console.log(`${result4} should equal ${expected4}`);
