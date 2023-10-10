function frankenSplice(arr1, arr2, n) {
    var resArr = arr2.slice(0, n);
    for (var ele of arr1) {
        resArr.push(ele);
    }
    console.log("resArr (first loop result, should be all elements of arr1 and the n-1 index of arr2): " + resArr);

    var tmpArr = arr2.slice(n, arr2.length);
    for (var ele of tmpArr) {
        resArr.push(ele);
    }
    return resArr;
  }
  

  var res = frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(res);