/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr = arr.slice(1);
    }
    return arr;
}

const res = dropElements([1, 2, 3], function(n) {return n < 3; });
const res2 = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
const res3 = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
const res4 = dropElements([1, 2, 3, 4], function(n) {return n > 5;});


console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);