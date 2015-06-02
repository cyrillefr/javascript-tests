function flattenArr(arr){
  var temp = [];

  arr.forEach(function(elt){
    if(elt instanceof Array){
      temp = temp.concat(flattenArr(elt));
    }
    else{
      temp.push(elt);
    }
  });

  return temp.sort();
}