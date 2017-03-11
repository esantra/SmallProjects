
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var sRoll = [];
  var newArr = [];
  sRoll.push(arr);
  while(sRoll.length > 0) {
    var sRollPop = sRoll.pop();
    if(sRollPop instanceof Array) {
      sRoll = sRoll.concat(sRollPop);
    } else {
      newArr.push(sRollPop);
    }
  }
  return newArr.reverse();
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
