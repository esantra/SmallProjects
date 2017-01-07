function binaryAgent(str) {
  var bin = str.split(' ');
  var tog = [];
  console.log(bin);
  for(var i = 0; i < bin.length; i++){
    var eng = String.fromCharCode(parseInt(bin[i], 2));
    console.log(eng);
    tog.push(eng);
  }
  console.log(tog);
  tog = tog.join('');
  return tog;
}

var a = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(a);
