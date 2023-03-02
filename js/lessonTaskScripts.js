// JSON

const myCountry = {
  country: "Norway",
  city: "Oslo",
  currency: "Krone",
};

const stringify = JSON.stringify(myCountry);

console.log(stringify);

const parsed = JSON.parse(stringify);

console.log(parsed);

// loacal storage lesson

localStorage.setItem("firstName", "Ola");

const firstName = localStorage.getItem("firstName");

console.log(firstName);

localStorage.removeItem("firstName");

localStorage.clear();

// sessionStorage is the same as localStorage except its data is cleared immediately when the page is closed.

// local storage task

const pet = {
  type: "Dog",
  name: "Lilje",
};

console.log(pet);

const stringPet = JSON.stringify(pet);

console.log(stringPet);

localStorage.setItem("pets", stringPet);

const getPet = localStorage.getItem("pets");

console.log(getPet);

const parsePet = JSON.parse(getPet);

console.log(parsePet);

// destructuring lesson

const person1 = {
  first: "Ola",
  last: "Nordmann",
  CO: "Norway",
};

// Normal variable assignment to object properties
// const firstName = person.firstName;
// const lastName = person.lastName;
// const country = person.country;

// Destructuring the values instead:
const { first, last, CO } = person1;

const greeting = `Hello, I am ${first} ${last} from ${CO}.`;
console.log(greeting);
// Logs:
// Hello, I am Ola Nordmann from Norway.

// lesson task

// ex 1

// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
  manufacturer: "Nissan",
  model: "Skyline GT-R",
  country: "Japan",
  coupe: true,
};

// const { manufacturer: man, model, country, coupe } = car;

// console.log(man, model, country, coupe);

function logcar({ manufacturer: man, model, country, coupe }) {
  console.log(`info about the car: ${man} ${model} ${country} ${coupe}`);
}

logcar(car);

// Destructure the first, second and fifth value from
// the array. You are free to call the variables whatever
// you would like. Once you have destructured the values,
// log the variables so you know that you have destructured
// them correctly.

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [one, two, , , five, ...rest] = values;

console.log(one, two, five);

console.log(rest);

// maps lesson task

//     Create a new Map object called users.
//     Add a key of 12 with the value of { firstName: "Ola", lastName: "Nordmann" }.
//     Log the size of the Map to the console.
//     Add a key of 50 with the value of { firstName: "Kari", lastName: "Nordmann" }.
//     Log the size of the Map to the console.
//     Delete the key 12 that was added in step 2 above.
//     Log the size of the Map to the console.

const myMap = new Map();

myMap.set("12", { firstName: "Ola", lastName: "Nordmann" });

console.log(myMap.get("12"));

console.log(myMap.size);

myMap.set("50", { firstName: "Kari", lastName: "Nordmann" });

console.log(myMap.size);

myMap.delete("12");

console.log(myMap.size);

// set lesson task

// Create a new set called values.
// Try adding the following values: 1, 2, 2, 2, 3, 4.
// Check the length of the set.
// Check that the set has the value of 1.
// Check that the set has the value of a.

const linnSet = new Set();

linnSet.add("1");
linnSet.add("2");
linnSet.add("2");
linnSet.add("2");
linnSet.add("3");
linnSet.add("4");

console.log(linnSet.size);

function check() {
  if (linnSet.has("1")) {
    console.log("true");
  }
}

check();

const newnew = new Set();

newnew.add(1);
newnew.add(2);
newnew.add(3);

console.log(newnew.size);

console.log(newnew.has(1));

console.log(newnew.has("a"));

// Create a class called Person.
// It should take in firstName and lastName arguments.
// Add a method speak that logs "Hello Ola Nordmann" if I was to supply Ola as the firstName and Nordmann as the last name.
// Create a new instance of this class and then call the speak method from this instance.

class person {
  constructor(firstName1, lastName1) {
    this.firstName1 = firstName1;
    this.lastName1 = lastName1;
  }

  speak() {
    console.log(`Hello my name is ${this.firstName1} ${this.lastName1}`);
  }
}

const pperson = new person("Ola", "Nordmann");

pperson.speak();
