function lcm(a,b) {
  //least common multiples formula:
  //lcm(a, b) = a × b / gcd(a, b).
  //console.log(gcd(a,b));
  var lcm = (a * b) / gcd(a,b);
  return lcm;
}

function gcd(a, b) {
  if(b === 0){
    return a;
  }
  else {
    return gcd(b, a % b);
  }
}

function smallestCommons(arr) {
    arr = arr.sort();
    var lcmult = 1;
    var incrementalArr = [];
    for(var i = arr[0]; i <= arr[arr.length-1]; i++){
        lcmult = lcm(lcmult, i);
    }
    return lcmult;
}

console.log(smallestCommons([18, 23]));
