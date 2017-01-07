/*We'll pass you an array of two numbers.
Return the sum of those two numbers and all
numbers between them.
The lowest number will not always come first.
Math.max()
Math.min()
Array.prototype.reduce()*/

function sumAll(arr) {
  var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null, arr);
  console.log(max + " " + min);

  var sum = 0;
  for(i = min; i <= max; i++){
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}

sumAll([4, 1]);
