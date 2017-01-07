function isUpperCase(char){
  if(char === char.toUpperCase()){
    return true;
  }
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //insert a space for every capital letter before it
  var splitArr = str.split('');
  for(var i = 1; i < splitArr.length; i++){
    //console.log(splitArr[i]);
    if(isUpperCase(splitArr[i]) &&
    splitArr[i] !== ' ' &&
    splitArr[i] !== '-' &&
    splitArr[i] !== '_' &&
    splitArr[i-1] !== ' ' &&
    splitArr[i-1] !== '_'){
      splitArr[i] = ' ' + splitArr[i];
      console.log(splitArr[i]);
    }
  }
  str = splitArr.join('');
  str = str.toLowerCase();
  console.log(splitArr.join(''));
  str =
    str.replace(new RegExp(' ', 'g'), '-');
   str =
    str.replace(new RegExp('_', 'g'), '-');
  console.log(str);
  return str;
}

spinalCase('AllThe-small Things');
