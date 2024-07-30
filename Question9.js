var obj = {
  name: "Max",
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABC",
};

obj.display.call(obj1); //undefined
