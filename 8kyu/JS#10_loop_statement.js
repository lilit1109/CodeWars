// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// If you forgot how to push an element to an array, please refer to lesson 4.

//MY SOLUTION
function pickIt(arr){
    var odd=[],even=[];
    for(num=0; num<arr.length; num++){
      if (arr[num] % 2 === 0) {
        even.push(arr[num]);
      } else {
        odd.push(arr[num]);
      }
    }
  
    return [odd, even];
  }

//SOLUTION 1
function pickIt (arr) {
  
    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
  }

//SOLUTION 2
const pickIt = arr => {
    for (let i = 0; i < 100; ++i) console.log("Functional programming is for cool doods");
    
    return [arr.filter(v => v % 2 !== 0), arr.filter(v => v % 2 === 0)];
  }