/* Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this. */

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    // Only change code below this line
/*  for (var ele of this) {
        if (callback(ele)) {
            newArray.push(ele);
        }
    } */
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    // Only change code above this line
    return newArray;
};

var res = [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index);
console.log(res);