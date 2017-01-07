function truthCheck(collection, pre) {
  // Is everyone being true?
  var count = 0;
  var retVal = false;
  var finalretValue;
  Object.keys(collection).forEach(function(key) {
    if(collection[key].hasOwnProperty(pre)){
      console.log(collection[key][pre]);
      if((collection[key][pre])){
        count++;
        if(count == collection.length){
          retVal = true;
        }
      } else {
        retVal = false;
        finalretValue = false;
      }
      return true;
    } else {
      retVal = false;
    }
  });
  console.log('return value ' + retVal);
  return retVal;
}

var a =
truthCheck([
{"user": "Tinky-Winky", "sex": "male"},
{"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"},
{"user": "Po", "sex": "female"}], "sex");
//should return true.


var b = truthCheck([
{"user": "Tinky-Winky", "sex": "male"},
{"user": "Dipsy"},
{"user": "Laa-Laa", "sex": "female"},
{"user": "Po", "sex": "female"}], "sex")
//should return false.

var c = truthCheck([
{"user": "Tinky-Winky", "sex": "male", "age": 0},
{"user": "Dipsy", "sex": "male", "age": 3},
{"user": "Laa-Laa", "sex": "female", "age": 5},
{"user": "Po", "sex": "female", "age": 4}], "age")
//should return false.

var d = truthCheck([
{"name": "Pete", "onBoat": true},
{"name": "Repeat", "onBoat": true, "alias": "Repete"},
{"name": "FastFoward", "onBoat": true}], "onBoat")
//should return true

console.log(a);
console.log(b);
console.log(c);
console.log(d);
