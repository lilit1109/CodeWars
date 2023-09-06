// Task
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.

// When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. If you pass in all tests you can click "Submit" to submit your code.

//MY SOLUTION
function howManydays(month){
    switch (month){
        case 2:
        days =28;
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        days = 30;
        break;
        default:
        days =31;
    }
    return days;
  }

//SOLUTION 1
function howManydays(month){
    switch ( month ){
      case 2 : return 28
      case 4: case 6: case 9: case 11: return 30
      default: return 31
    }
  }

//SOLUTION 2
function howManydays(month){//switch
  return ~[1,3,5,7,8,10,12].indexOf(month)?31:month==2?28:30;
}

//SOLUTION 3
howManydays=m=>m==2?28:('switch',+(m>7)+m)%2?31:30

//SOLUTION 4
function howManydays(month) {
    if (new Set([1, 3, 5, 7, 8, 10, 12]).has(month))
      return 31;
    else if (new Set([4, 6, 9, 11]).has(month))
      return 30;
    return 28;
    // switch
  }
//SOLUTION 5
howManydays=d=>{switch (d){}
                  return new Date(2001,d,0). getDate()}