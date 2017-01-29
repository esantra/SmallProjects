function isVowel(chr){
    return 'aeiou'.indexOf( chr[0].toLowerCase() ) !== -1;
}
function translatePigLatin(str) {
  var initChar = str.charAt(0);
  if(isVowel(initChar)){
    str = str +  'way';
  } else {
    while(!isVowel(str.charAt(0))){
      initChar = str.charAt(0);
      str = str.substr(1) + initChar;
    }
    str += 'ay';
  }
  return str;
}

translatePigLatin("consonant");

console.log(translatePigLatin("glove"));

//should return "aliforniacay".
/*translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".*/
