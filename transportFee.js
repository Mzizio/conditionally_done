//The passing test for the function transportFee
assert.equal(transportFee("morning"),'R20');
assert.equal(transportFee("afternoon"),'R10');
assert.equal(transportFee("nightshift"),'free');
assert.equal(transportFee("no"),"Its your day of today");

//The below function called transportFee takes a shift parameter and returns the right price based on the shift you are working. 
function transportFee(shift){
  switch(shift){
    case "morning":
      return 'R20';
      break;
    case "afternoon":
      return 'R10';
      break;
     case "nightshift":
      return 'free';
      break;
    default:
      return "Its your day of today";
    }

};
