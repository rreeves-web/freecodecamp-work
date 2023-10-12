/* Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable. */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    let newArr = arr.slice();
    return newArr.sort(function(a, b){return a - b});
}
  // Only change code above this line


var res = nonMutatingSort(globalArray);
var res2 = nonMutatingSort([1, 30, 4, 21, 100000]);
var res3 = nonMutatingSort([140000, 104, 99]);

console.log(res);
console.log(res2);
console.log(res3);