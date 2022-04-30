const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  encrypt(plainMsg, key) {
    if (!arguments[0] || !arguments[1]) throw new Error('Incorrect arguments!');
    let cypher = "";
    for (let i = 0, j = 0; i < plainMsg.length; i++) {
      let currentLetter = plainMsg[i];

      if (currentLetter === currentLetter.toUpperCase()) {
        let upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (currentLetter === currentLetter.toLowerCase()) {
        let lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
        cypher += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    return cypher;

  }
  decrypt(message, key) {
    if (!arguments[0] || !arguments[1]) throw new Error('Incorrect arguments!');
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i)

      if (c === c.toUpperCase()) {
        result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
      } else {
        result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
      }

      j = ++j % key.length
    }
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
