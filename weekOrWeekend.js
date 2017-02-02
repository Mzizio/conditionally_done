const assert = require('assert');
//test passing
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');

//This function takes in a day parameter. If the day passed in is a weekDay it should return 'week' otherwise is should return 'weekend';
function weekOrWeekend(day){
  
  switch(day){
    case "Monday":
            return "week";
      break;
    case "Tuesday":
            return "week";
      break;
    case "Wednesday":
            return "week";
      break;
    case "Thursday":
            return "week";
      break;
    case "Friday":
            return "week";
      break;
    case "Saturday":
            return "weekend";
      break;
    case "Sunday":
            return "weekend";
      break;
      
    default:
      return "Invalid day";
            }

};
