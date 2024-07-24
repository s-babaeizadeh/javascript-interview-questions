// Question1 - What's the output of the following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //465

// a["[object Object]"]= 123;
// b["[object Object]"]= 465;
