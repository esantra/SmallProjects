function fearNotLetter(str) {
  var passed = str.toLowerCase().split('');
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var init = passed[0];
  var index = alphabet.indexOf(init);
  console.log('passed ' + passed.length);
  for(var i=0; i < passed.length; i++){
    if(str.charCodeAt(i) !==
      alphabet.charCodeAt(i + index)){
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("acd"));



/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.*/
