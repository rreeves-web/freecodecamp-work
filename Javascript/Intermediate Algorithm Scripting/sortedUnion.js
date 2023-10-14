/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

function uniteUnique(arr, ...rest) {
    let res = [];
    for (const v of arr) {
        if (res.some((ele) => ele == v)) {
            continue;
        } else {
            res.push(v);
        }
    }
    for (const arr of rest) {
        for (const v of arr) {
            if (res.some((ele) => ele == v)) {
                continue;
            } else {
                res.push(v);
            }
        }
    }
    return res;
}

const res = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
const res2 = uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

console.log(res);
console.log(res2);