//Question 4 - what is the output?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; // reference to shape object
  },
  perimeter: () => 2 * Math.PI * this.radius, // reference to window object
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN
