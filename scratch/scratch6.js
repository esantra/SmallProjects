function pairElement(str) {
  var passed = str.split('');
  console.log(passed);
  var basePairs = [["A", "T"], ["T","A"], ["C","G"], ["G","C"]];
  var ret = [];
  for(var i = 0; i < passed.length; i++){

    if(passed[i] == "A"){ ret.push(basePairs[0]);}
    if(passed[i] == "T"){ ret.push(basePairs[1]);}
    if(passed[i] == "C"){ ret.push(basePairs[2]);}
    if(passed[i] == "G"){ ret.push(basePairs[3]);}

  }
  console.log(ret);
  return ret;
}

pairElement("ATCGA");
//should return
/*[["A","T"],
["T","A"],
["C","G"],
["G","C"],
["A","T"]]*/
