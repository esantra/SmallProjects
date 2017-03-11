
function addTogether() {
  var sum = 0;
  //return a function if only one arguments
  if(arguments.length === 1){
    var addNum = arguments[0];
    if(typeof arguments[0] != 'number'){
      return undefined;
    }
    return function(n){
      if(typeof arguments[0] != 'number'){
        return undefined;
      }
      return n + addNum;
    };
  }

  for(var i = 0; i < arguments.length; i++){
    if(typeof arguments[i] != 'number'){
      return undefined;
    }
    sum += arguments[i];
  }
  return sum;
}

var a = addTogether(2)([3]);
console.log(a);
