
/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
  var romanStr = '';
  var romanNums = {'M':1000, 'CM':900, 'D':500,
                'CD':400, 'C':100, 'XC':90, 'L':50,
                'XL':40, 'X':10, 'IX':9, 'V':5, 'IV':4,
                'I':1};

  Object.keys(romanNums).forEach(function(key) {
      if((num - romanNums[key]) >= 0){
        while(num - romanNums[key] >= romanNums[key]){
          num = num - romanNums[key];
          romanStr += key;
        }
        num = num - romanNums[key];
        romanStr += key;
      }
  });
  return romanStr;
}

console.log(convertToRoman(891));
