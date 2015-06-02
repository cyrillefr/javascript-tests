function ObjClone(obj){
  var temp = {};

  for(var key in obj){
    //object & objects of objects
    if(Object.prototype.toString.call(obj[key]) === '[object Object]'){		
      temp[key] =  ObjClone(obj[key]);				
    }
    //simple types or arrays
    else{
      temp[key] = obj[key];
    }
  };

  return temp;
}