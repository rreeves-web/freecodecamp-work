/* Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this. */

Array.prototype.myMap = function(callback) {
    let newArray = [];
    // Only change code below this line
    for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
};

var res = [23, 65, 98, 5, 13].myMap(item => item * 2);
var res2 = [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]);
console.log(res);
console.log(res2);