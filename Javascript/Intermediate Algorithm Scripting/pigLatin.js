/* Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function pigLatinCons(strArr) {
    const consonants = "bcdfghjklmnpqrstvwxz".split('');
    const vowels = "aeiou".split('');
    let consArr = [];
    for (var i = 0; i < strArr.length; i++) {
        i = 0;
        if (vowels.some((vowel) => strArr[i] == vowel)) {
            break;
        } else if (consonants.some((cons) => strArr[i] == cons)) {
            let consChar = strArr.shift();
            consArr.push(consChar);
        }
    }
    return strArr.concat(consArr).concat(["ay"]);
}

function translatePigLatin(str) {
    const vowels = "aeiou".split('');
    let strArr = str.split('');
    var strContainsVowel = false;
    for (const char of strArr) {
        if (vowels.some((vowel) => char == vowel)) {
            strContainsVowel = true;
        }
    }
    if (!strContainsVowel) {
        return strArr.join('').concat(["ay"]);
    } else if (vowels.some((vowel) => vowel == strArr[0])) {
        return strArr.concat(["way"]).join('');
    } else {
        return pigLatinCons(strArr).join('');
    }
}

var res = translatePigLatin("consonant");
var res2 = translatePigLatin("algorithm");
var res4 = translatePigLatin("rhythm");

console.log(res);
console.log(res2);
console.log(res4);