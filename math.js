// function add(a,b){
//     return (a+b)*2;
// }

// function sub(a,b) {
//     return a-b;
// }


// module.exports = {
//     addFn : add,
//     subFn : sub
// }



//method 2
exports.add = (a,b) => a + b; //using anonymous function and exporting it directly. here we are using arrow function syntax to define the function. we can use this function in hello.js file by using math.add() syntax. here math is the var we used to import the math module in hello.js file.
exports.sub = (a,b) => a - b;
