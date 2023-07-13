//-Array Problems:
{console.log("\tArray Problems:");

console.log("\n\t1:\tGenerate, store, and find elements in array.");

let numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 900 + 100));
console.log("Generated numbers:", numbers);

let max = Math.max(...numbers);
let min = Math.min(...numbers);

let secondMax = Math.max(...numbers.filter(num => num !== max));
let secondMin = Math.min(...numbers.filter(num => num !== min));

console.log("2nd largest number is", secondMax);
console.log("2nd smallest number is", secondMin);

//-=-=-=-

console.log("\n\t2:\tSort array, find 2nd largest and smallest.");

numbers.sort((a, b) => a - b);

console.log("Sorted numbers:", numbers);

console.log("2nd smallest after sorting:", numbers[1]);
console.log("2nd largest after sorting:", numbers[numbers.length - 2]);

//-=-=-=-

console.log("\n\t3:\tStore and display prime factors in array.");

function primeFactors(n) {
    let factors = [], i = 2;
    while (i * i <= n) {
      if (n % i) {
        i++;
      } else {
        n /= i;
        factors.push(i);
      }
    }
    if (n > 1) factors.push(n);
    return factors;
  }
  
  let randomNum = Math.floor(Math.random() * 100);
  console.log("Prime factors of", randomNum, "are", primeFactors(randomNum));
  
  //-=-=-=-

console.log("\n\t4:\tProgram for three integers summing to zero.");

let array = Array.from({length: 30}, () => Math.floor(Math.random() * 20 - 10));  // generates 30 random numbers between -10 and 10
console.log("Array for sum check:", array);

for (let i = 0; i < array.length - 2; i++) {
  for (let j = i + 1; j < array.length - 1; j++) {
    for (let k = j + 1; k < array.length; k++) {
      if (array[i] + array[j] + array[k] === 0) {
        console.log("Found integers:", array[i], array[j], array[k]);
      }
    }
  }
}

//-=-=-=-

console.log("\n\t5:\tIdentify and store twice-repeated digits.");

let repeatedDigits = [];
for (let i = 10; i <= 100; i++) {
  if (parseInt(i / 10) === (i % 10)) {
    repeatedDigits.push(i);
  }
}
console.log("Repeated digits are:", repeatedDigits);

//-=-=-=-
}


//-Map-Dictionary Problems:
{console.log("\tMap-Dictionary Problems:");

console.log("\n\t1:\tRoll, record, repeat die; identify max/min times.");

let dieResults = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

while (true) {
  let dieRoll = Math.floor(Math.random() * 6) + 1;
  dieResults[dieRoll]++;

  if (dieResults[dieRoll] === 10) break;
}

console.log("Die roll results:", dieResults);

let maxCount = Math.max(...Object.values(dieResults));
let minCount = Math.min(...Object.values(dieResults));

let maxNumbers = Object.keys(dieResults).filter(key => dieResults[key] === maxCount);
let minNumbers = Object.keys(dieResults).filter(key => dieResults[key] === minCount);

console.log("Numbers that reached maximum times:", maxNumbers);
console.log("Numbers that reached minimum times:", minNumbers);

//-=-=-=-

console.log("\n\t2:\tGenerate birth months, find common birthdays.");

let birthdays = Array.from({length: 50}, () => Math.ceil(Math.random() * 12));
let monthCount = {};

birthdays.forEach(month => {
  if (month in monthCount) monthCount[month]++;
  else monthCount[month] = 1;
});

console.log("Individuals' birthdays per month:", monthCount);

let sameMonthBirthdays = Object.keys(monthCount).filter(key => monthCount[key] > 1);

console.log("Months with more than one birthday:", sameMonthBirthdays);

//-=-=-=-

}