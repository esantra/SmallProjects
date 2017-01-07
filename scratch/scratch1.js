/*Compare two arrays and return a new array with
any items only found in one of the two given arrays,
but not both. In other words, return the symmetric
difference of the two arrays.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()*/


function diffArray(arr1, arr2) {
    if(arr1.length === 0){
      return arr2;
    }
    if(arr2.length === 0){
      return arr1;
    }
    var newArr = [];
    var maxArr = [];
    var minArr = [];

    var minLength = arr1.length;
    minArr = arr1;
    if (arr2.length < minLength) {
        minLength = arr2.length;
        minArr = arr2;
    }

    var maxLength = arr2.length;
    maxArr = arr2;
    if (arr1.length > maxLength) {
        maxLength = arr1.length;
        maxArr = arr1;
    }

    var eq;
    if(minLength == maxLength){
      eq = true;
    }

    console.log(minArr);
    console.log(maxArr);

    for (var i = 0; i < maxArr.length; i++) {
      var one = maxArr[i];
      if(minArr.indexOf(one) > -1){

      } else {
        newArr.push(one);
      }
    }

    for (var j = 0; j < minArr.length; j++) {
      var two = minArr[j];
      console.log(two + ' ' + maxArr.indexOf(two));
      if(maxArr.indexOf(two) > -1 ){
      } else {
        newArr.push(two);
      }
    }

    console.log(newArr);
    return newArr;
}

diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  );
//should return 4
