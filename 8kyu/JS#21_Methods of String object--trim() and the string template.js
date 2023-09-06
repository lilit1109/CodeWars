// oding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.


//MY SOLUTION
function fiveLine(s){
    //coding here...
    s = s.trim();
    var tmp = s;
    var res = [s];
    
    for (var i = 1; i < 5; i++) {
         res.push(s += tmp);
    } 
    return res.join("\n");
  }

//SOLUTION 1
function fiveLine(s){
    s = s.trim();
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
  }
  
//SOLUTION 2
let fiveLine = (s, t=s.trim(), r='') => [...Array(5)].map(_ => r += t).join('\n');

//SOLUTION 3
const fiveLine = s => {
    let answer = [];
    s = s.trim();
    for(let i = 0; i < 5; i++) {
      answer.push(s + s.repeat(i));
    }
    return answer.join('\n')
  }