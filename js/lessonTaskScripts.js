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