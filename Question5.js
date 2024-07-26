//Question5- Convert Map to Object and Convert Object to Map

const mapval = new Map([
  ["name", "Steve Smith"],
  ["age", 35],
]);

//Convert Map to Object
console.log(mapval);
const obj = Object.fromEntries(mapval);
console.log(obj);

//Convert Object to Map
const mapResult = new Map(Object.entries(obj));
console.log(mapResult);
