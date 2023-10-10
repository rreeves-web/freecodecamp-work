/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    var tmpArr = [];
    var resArr = [];
    while (arr.length > 0) {
        for (var i = 0; i < size; i++) {
            var ele = arr.shift();
            if (ele || ele == 0) {
                tmpArr.push(ele);
            }
        }
        resArr.push(tmpArr);
        tmpArr = [];
    }
    console.log(resArr);
    return resArr;
  }
  
  var res = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  var res2 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

  console.log("Expected result: " + [["a", "b"], ["c", "d"]], + "\nActual result: " + res);
  console.log("Expected result: " + [[0, 1, 2, 3], [4, 5]] + "\nActual result: " + res2);