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
