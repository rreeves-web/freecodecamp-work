/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog */

function myReplace(str, before, after) {
    const strArr = str.split(' ');
    if (/[A-Z]/.test(before) && /[a-z]/.test(after)) {
        const afterUpper = after.replace(/([a-z])/, function(v) { return v.toUpperCase()});
        for (const string of strArr) {
            if (string == before) {
                return str.replace(before, afterUpper);
            }
        }
    } else if (/[a-z]/.test(before) && /[A-Z]/.test(after)) {
        const afterLower = after.replace(/([A-Z])/, function (v) { return v.toLowerCase()});
        for (const string of strArr) {
            if (string == before) {
                return str.replace(before, afterLower);
            }
        }
    } else {
        for (const string of strArr) {
            if (string == before) {
                return str.replace(before, after);
            }
        }
    }
}

const res = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log(res);