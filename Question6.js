// Convert Array to Object in Javascript

const names = ["Charles", "Mateus", "Simon"];

//Using Object.assign()
let obj = Object.assign({}, names);
console.log("obj", obj);

//using spread operator
let obj1 = { ...names };
console.log("obj1", obj1);

// Using reduce method
let obj2 = names.reduce((a, val, i) => {
  return { ...a, [i]: val };
}, {});
console.log("obj2", obj2);
