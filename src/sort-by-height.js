const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.filter((item) => item !== -1);

  for (let i = newArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (newArr[j + 1] < newArr[j]) {
        const save = newArr[j];

        newArr[j] = newArr[j + 1];

        newArr[j + 1] = save;
      }
    }
  }

  const res = [];

  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res.push(arr[i]);
    } else {
      res.push(newArr[idx]);

      idx++;
    }
  }

  return res;
}

module.exports = {
  sortByHeight,
};
