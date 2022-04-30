const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const answer = [];
  for (const char of str) {
  if (answer.length && answer[[answer.length-1]].hasOwnProperty(char)) {
  answer[answer.length-1][char]++
  } else {
  answer.push({[char]: 1});
  }
  }
  return answer.map(item =>{
    const a = Object.entries(item)[0]
    return (a[1] === 1?'':a[1]) +a[0]
  } ).join('')
  }
  encodeLine('aabbccc')
module.exports = {
  encodeLine
};
