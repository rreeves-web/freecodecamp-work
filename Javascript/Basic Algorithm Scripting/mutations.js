/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */

// Iterate over elements of string 
function mutation(arr) {
    var charPresent = false;
    for (var secondChar of arr[1]) {
        charPresent = false;
        for (var firstChar of arr[0]) {
            if (secondChar.toLowerCase() == firstChar.toLowerCase()) {
                charPresent = true;
            }
        }
        if (!charPresent) {
            return false;
        }
    }
    return true;
  }
  
  var res = mutation(["hello", "hey"]);
  var res2 = mutation(["hello", "Hello"])
  var res3 = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
  var res4 = mutation(["Mary", "Army"]);
  var res5 = mutation(["Mary", "Aarmy"]);
  var res6 = mutation(["Alien", "line"]);
  var res7 = mutation(["floor", "for"]);
  var res8 = mutation(["hello", "neo"]);
  var res9 = mutation(["voodoo", "no"]);
  var res10 = mutation(["ate", "date"]);
  var res11 = mutation(["Tiger", "Zebra"]);
  var res12 = mutation(["Noel", "Ole"]);

  console.log("Test 1 Expected result: false\n Actual Result: " + res);
  console.log("Test 2 Expected result: true\n Actual Result: " + res2);
  console.log("Test 3 Expected result: true\n Actual Result: " + res3);
  console.log("Test 4 Expected result: true\n Actual Result: " + res4);
  console.log("Test 5 Expected result: true\n Actual Result: " + res5);
  console.log("Test 6 Expected result: true\n Actual Result: " + res6);
  console.log("Test 7 Expected result: true\n Actual Result: " + res7);
  console.log("Test 8 Expected result: false\n Actual Result: " + res8);
  console.log("Test 9 Expected result: false\n Actual Result: " + res9);
  console.log("Test 10 Expected result: false\n Actual Result: " + res10);
  console.log("Test 11 Expected result: false\n Actual Result: " + res11);
  console.log("Test 12 Expected result: true\n Actual Result: " + res12);