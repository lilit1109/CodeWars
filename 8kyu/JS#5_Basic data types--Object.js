// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

//MY SOLUTION
function animal(obj){
    return "This "+obj["color"]+" "+obj["name"]+" has "+obj["legs"]+" legs."
  }

//SOLUTION 1
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }
//SOLUTION 2
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
//SOLUTION 3
function animal({name, legs, color}) {
    return `This ${color} ${name} has ${legs} legs.`;
  }
//SOLUTION 4
animal = o => `This ${o.color} ${o.name} has ${o.legs} legs.`;