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

// Problem 3:
var array = ['this', 'assignment', 'if', 'fun'];
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  }

  return stringArray.sort(byLastLetter);
}
assert(JSON.stringify(lastLetterSort(array)) === JSON.stringify(['if', 'fun', 'this', 'assignment']), 'number 4 is wrong');
var num = [1,2,3,4];

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(element) {
    return(sum += element);
  });
  return sum;
}

sumArray(num);

var nums = [[11,2],[3,4],[0,6]];

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a,b) {
    return sumArray(a) - sumArray(b);
  });
}

assert(JSON.stringify(sumSort(nums)) === JSON.stringify([[0,6],[3,4],[11,2]]), 'number 6 is wrong');
