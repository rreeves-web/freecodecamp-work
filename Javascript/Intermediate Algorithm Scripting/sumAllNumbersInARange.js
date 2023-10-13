/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */
function min(arr) {
    let acc = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < acc) {
            acc = arr[i];
        }
    }
    return acc;
}
function max(arr){
    let acc = arr[0];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > acc) {
            acc = arr[i];
        }
    }
    return acc;
}

function sumAll(arr) {
    const lo = min(arr);
    const hi = max(arr);
    console.log("lo: " + lo + "\nhi: " + hi);
    let rangeArr = [];
    for (var i = lo; i <= hi; i++) {
        rangeArr.push(i);
    }
    return rangeArr.reduce((sum, ele) => sum + ele, 0);
}
  
var res = sumAll([1, 4]);
console.log(res);