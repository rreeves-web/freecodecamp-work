/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */
function diffChecker(arr1, arr2) {
    let newArr = [];
    for (var ele1 of arr1) {
        if (arr2.some((ele2) => (ele2 == ele1))) {
            continue;
        } else {
            newArr.push(ele1);
        }
    }
    return newArr;
}

function diffArray(arr1, arr2) {
    let newArr = diffChecker(arr1, arr2);
    return newArr.concat(diffChecker(arr2, arr1));
}

var res = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
var res2 = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
var res3 = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

console.log(res);
console.log(res2);
console.log(res3);