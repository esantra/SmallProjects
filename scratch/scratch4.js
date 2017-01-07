
/*Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()*/
function isUpperCase(char){
  if(char === char.toUpperCase()){
    return true;
  }
}

function myReplace(str, before, after) {

  if(isUpperCase(before.charAt(0))){
    after = after.charAt(0).toUpperCase()  + after.slice(1);
  }

  str = str.replace(before, after);

  console.log(str);
  return str;
}

myReplace("He is Sleeping on the couch",
  "Sleeping", "sitting");
//should return "He is Sitting on the couch"
