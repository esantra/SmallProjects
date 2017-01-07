function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceLength = Object.keys(source).length;
  for(var i = 0; i < collection.length; i++){
    //add for each source key here!
    var counter = 0;
    var thisCollection = collection[i];
    Object.keys(thisCollection).forEach(function(key) {
      if(thisCollection[key] == source[key] ){
        counter++;
        if(arr.indexOf(thisCollection) === -1 && counter === sourceLength){
          arr.push(thisCollection);
        }
      }
    });
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 },
{ "a": 1 },
{ "a": 1, "b": 2, "c": 2 }],
{ "a": 1, "b": 2 }));
//should return [{ "a": 1, "b": 2 },
//{ "a": 1, "b": 2, "c": 2 }].
