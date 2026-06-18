console.log("Hello World!")

// const math= require("test") // it will search test module in its built-in module

const math= require("./test") // this ./ will search module test in our local desk

// console.log(math);    // without exporting and require here ,the module bank it will show add in not defines

math.add(2,5); // for 1st way
math.subtract(5,2); 

math.multiply(2,4); // for 2nd way
math.divide(10,2);
