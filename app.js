function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
  else{
    console.log('you\'re right mothafucka');
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

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hours = 0;
  while(population > 0) {
    population -= peoplePerHour;
    peoplePerHour++;
    hours++;
  }
  return hours;
};
assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

//My assertions:
assert(blob.hoursToOoze(1, 1) === 1,
  'number 1 is wrong');

assert(blob.hoursToOoze(500, 5000000) === 1,
  'number 2 is wrong');

assert(blob.hoursToOoze(1000000, 100) === 1319,
  'number 3 is wrong');
