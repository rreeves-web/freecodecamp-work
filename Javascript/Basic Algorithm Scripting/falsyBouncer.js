/* Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */


function bouncer(arr) {
    var resArr = [];
    for (var ele of arr) {
        if (ele) {
            resArr.push(ele)
        }
    }
    return resArr;
  }
  
  var res = bouncer([7, "ate", "", false, 9]);
  console.log(res);