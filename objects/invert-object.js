/* 
  Invert Hash

  A hash table / hash map is an obj / dictionary

  Given an object / dict, return a new object / dict
  that has the keys and the values swapped so that
  the keys become the values and the values become
  the keys.
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
  // your code here
  let objSwap = {};
  for (const key in obj) {
    objSwap[obj[key]] = key;
  }
  return objSwap;
}

console.log(invertObj(obj1));
