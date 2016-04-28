function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

function Blob (name){
  this.name = name;
  this.consumptionRate = 0;
  this.personsConsumed = 0;
  this.hoursSpentInDowington = 0;
  this.popLeft = 1000;
}

var blob = new Blob('blob');

while (blob.popLeft > 0) {
  blob.consumptionRate++;
  blob.popLeft = blob.popLeft - blob.consumptionRate;
  blob.hoursSpentInDowington++;
};

console.log('Length of time to consume Downington = ' + blob.hoursSpentInDowington);

var hoursSpentInDowington = blob.hoursSpentInDowington;

// var town = {
//
// };
//
// function hoursToOoze(population, peoplePerHour){};
