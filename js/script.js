const myCountry = {
  country: "Norway",
  city: "Oslo",
  currency: "Krone",
};

const stringify = JSON.stringify(myCountry);

console.log(stringify);

const parsed = JSON.parse(stringify);

console.log(parsed);
