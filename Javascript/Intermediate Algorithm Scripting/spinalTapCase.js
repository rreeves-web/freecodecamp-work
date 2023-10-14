/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    str = str.replace(/\s+/g, '-');
    str = str.replace(/[_?+]/g, '-');
    str = str.replace(/([a-z])([A-Z])/g,'$1-$2');
    return str.toLowerCase();
}

const res = spinalCase('This Is Spinal Tap');
const res2 = spinalCase("thisIsSpinalTap");
const res3 = spinalCase("AllThe-small Things");

console.log(res);
console.log(res2);
console.log(res3);