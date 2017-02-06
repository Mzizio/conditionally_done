/*Created By:Name:Mxolisi D Mtshali
            Date:02-02-2017;
*/
const assert=require('assert');
//These are the passing test for function fromWhere
assert.equal(fromWhere('CY'),'Bellville');
assert.equal(fromWhere('CJ'),'Paarl');
assert.equal(fromWhere('CA'),'Cape Town');
assert.equal(fromWhere('NO'),'Some other place!');

//The function below  takes a car registration number as a parameter and returns the town the car is from
function fromWhere(reg_number){

  if(reg_number.startsWith('CY')){
    return 'Bellville';
  }else if(reg_number.startsWith('CJ')){
    return 'Paarl';
  }else if(reg_number.startsWith('CA')){
    return 'Cape Town';
  }else{
    return 'Some other place!';
  }
};

