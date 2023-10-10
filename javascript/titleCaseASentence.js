function titleCase(str) {
    var strArr = str.split(" ");
    var resStr = "";
    for (var strElement of strArr) {
      for (var i = 0; i < strElement.length; i++) {
        if (i < 1) {
            var strElementUpper = strElement[i].toUpperCase();
            strElement = strElement.replace(strElement[i], strElementUpper);
        }
        else {
            var strElementLower = strElement[i].toLowerCase();
            strElement = strElement.replace(strElement[i], strElementLower);
        }
      }
      resStr += strElement + " ";
    }
    return resStr.trimEnd();
}

  var res = titleCase("I'm a little tea pot");
  var res2 = titleCase("sHoRt AnD sToUt");
  var res3 = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

  console.log(res);
  console.log(res2);
  console.log(res3);