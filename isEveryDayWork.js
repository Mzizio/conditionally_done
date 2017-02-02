const assert=require('assert');

//test passing
var morn=isEveryDayWork('morning');
assert.equal(morn,'do jogging');
var noon=isEveryDayWork('afternoon');
assert.equal(noon,'internet search');
var night=isEveryDayWork('night');
assert.equal(night,'study something new');
var def=isEveryDayWork('no time');
assert.equal(def,'just cool');

//This function takes a daytime parameter and returns activities I usually do.
function isEveryDayWork(daytime){
 switch(daytime){
   case "morning":
     return "do jogging";
     break;
   case "afternoon":
     return "internet search";
     break;
   case "night":
     return "study something new";
     break;
   default:
     return "just cool";
               
    }
};
