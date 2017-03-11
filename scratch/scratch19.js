
function dropElements(arr, func) {
  var new_arr = [];
  function dropElements(arr, func) {
    var i = 0;
    while(!func(arr[i])){
      arr.shift();
      if(arr.length === 0){
        break;
      }
    }
    return arr;
  }

}

var a = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
console.log(a);
