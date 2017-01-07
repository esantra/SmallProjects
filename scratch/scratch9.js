
function uniteUnique(arr) {
  var comArgs = [];
  for(var i = 0; i < arguments.length; i++){
    comArgs.push(arguments[i]);
  }
  var flattened = comArgs.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  var uniqArr = [];
  for(var j in flattened){
      if(uniqArr.indexOf(flattened[j]) === -1){
          uniqArr.push(flattened[j]);
      }
  }
  console.log(uniqArr);
  return uniqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
