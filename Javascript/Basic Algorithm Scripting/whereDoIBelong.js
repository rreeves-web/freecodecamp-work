/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */

function getIndexToIns(arr, num) {
    var tmpArr = arr.sort(function(a, b){return a - b});
    for (var i = 0; i <= tmpArr.length; i++) {
        if (tmpArr[i] >= num) {
            return i;
        }
    }
    if (num > tmpArr.length) {
        num = tmpArr.length;
    }
    return num;
  }
  
  var res = getIndexToIns([40, 60], 50);
  var res2 = getIndexToIns([10, 20, 30, 40, 50], 35);
  var res3 = getIndexToIns([10, 20, 30, 40, 50], 30);
  var res4 = getIndexToIns([3, 10, 5], 3);
  var res5 = getIndexToIns([5, 3, 20, 3], 5);
  var res6 = getIndexToIns([2, 5, 10], 15);
  var res7 = getIndexToIns([], 1);

  console.log("Expected result: 1\nActual result: " + res);
  console.log("Expected result: 3\nActual result: " + res2);
  console.log("Expected result: 2\nActual result: " + res3);
  console.log("Expected result: 0\nActual result: " + res4);
  console.log("Expected result: 2\nActual result: " + res5);
  console.log("Expected result: 3\nActual result: " + res6);
  console.log("Expected result: 0\nActual result: " + res7);