// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

//MY SOLUTION
function padIt(str, n) {
    let i = 1;
    while (i <= n) {
        if (i % 2 === 1) {
            str = '*' + str;
        }
        else {
            str = str + '*'; 
        }
        i++;
      
    }
    
    return str;
    
}

//SOLUTION 1
function padIt(str, n) {
    while (n > 0) {
      str = n-- % 2 ? '*' + str : str + '*';
    }
    return str;
  }

//SOLUTION 2
function padIt(str,n){ //while
    return "*".repeat(Math.ceil(n/2)) + str + "*".repeat(Math.floor(n/2))
  }

//SOLUTION 3
function padIt(str,n){
    let counter = 1;
    while(counter <= n){
      if(counter % 2 != 0) str = '*' + str;
      if(counter % 2 == 0) str += '*'
      counter++
    }
    return str
  }

//SOLUTION 4
// While-loop & ternary operator

padIt = (str, n) => {
    while (n--) str = n % 2 ? str + '*' : '*' + str;
    return str;
  }