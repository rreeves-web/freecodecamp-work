/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const strArr = str.split('');
    const strLen = str.length;
    const desiredLen = strLen + 1;
    let startingLetter = "";
    for (const char of strArr) {
        for (const alphabetChar of alphabet) {
            if (char == alphabetChar) {
                startingLetter += char;
                break;
            }
        }
        break;
    }
    const beginRange = alphabet.indexOf(startingLetter);
    let workingArr = [];
    for (var i = beginRange; i < desiredLen + beginRange; i++) {
        workingArr.push(alphabet[i]);
    }
    for (const workingChar of workingArr) {
        if (strArr.some((char) => workingChar == char)) {
            continue;
        } else {
            return workingChar;
        }
    }
    return undefined;
}

//const res = fearNotLetter("abce");
const res2 = fearNotLetter("stvwx");
//const res3 = fearNotLetter("abcdefghijklmnopqrstuvwxyz");

//console.log(res);
console.log(res2);
//console.log(res3);