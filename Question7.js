//Question7: return keys, values, key-value of Object

const student = {
  name: "Charles",
  age: 21,
  department: "Zoology",
};

console.log(Object.values(student));
console.log(Object.keys(student));
console.log(Object.entries(student));

// return the key-value parirs of the object
for (const [prop, val] of Object.entries(student)) {
  console.log(`${prop}:${val}`);
}
