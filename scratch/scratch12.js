function fibonacci(num){
  var arg = num;
  var fibArr = [];
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    if((b % 2) !== 0 && b <= arg){
      fibArr.push(b);
    }
    num--;
  }
  var sumNum = 0;
  for(var i = 0; i < fibArr.length; i++){
    sumNum += fibArr[i];
  }

  return sumNum;
}

console.log(fibonacci(1000));
