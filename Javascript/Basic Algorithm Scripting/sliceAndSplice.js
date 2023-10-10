/* You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    var resArr = arr2.slice(0, n);
    for (var ele of arr1) {
        resArr.push(ele);
    }
    var tmpArr = arr2.slice(n, arr2.length);
    for (var ele of tmpArr) {
        resArr.push(ele);
    }
    return resArr;
  }
  

  var res = frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(res);