function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


// This is called module method where we use divide our code in multiple module and export and import (required) it

// to connect this module to another and another module can access and use this module we have to export this module

//two ways of exporting

module.exports= add;
module.exports= sub;  // its will overwrite so its not a good way..

// we use object for this method
module.exports={
    add,
    sub
} // it will overwrite so use this in the last and at once


//2nd way anonomous function
exports.multiply=(a,b)=>a*b;
exports.divide=(a,b)=>a/b;
// we can use this as much time we want as this wont overwrite your code