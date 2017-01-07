
function findElement(arr, func) {
  var num = 0;
  for(var i = 0; i < arr.length; i++){
    var fun = func(arr[i]);
    if(fun){
      return arr[i];
    }
  }
  return undefined;
}

var a = findElement([1, 3, 5, 8, 9, 10],
  function(num){ return num % 2 === 0; });
console.log(a);
