// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

//MY SOLUTION
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

const equal1 = () => v1 + v1
const equal2 = () => v3 - v1
const equal3 = () => v1 * v5
const equal4 = () => v4 / v5
const equal5 = () => v2 % v4

//SOLUTION 1
var v1 = 50
var v2 = 100
var v3 = 150
var v4 = 200
var v5 = 2
var v6 = 250

function equal1 () {
  var a = v1   
  var b = v1   
  return a + b
}

function equal2 () {
  var a = v3
  var b = v1
  return a - b
}

function equal3 () {
  var a = v1
  var b = v5
  return a * b
}

function equal4 () {
  var a = v4
  var b = v5
  return a / b
}

function equal5 () {
  var a = v6
  var b = v3
  return a % b
}
