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
