/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) === "number") {
        if (typeof (second) === "number") return first + second;
        if (arguments.length === 1) return (second) => addTogether(first, second);
    }
}

const res  = addTogether(2,3);
const res2 = addTogether("2", 3);
const res3 = addTogether(5)(7);
const res4 = addTogether(2)([3]);

console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);