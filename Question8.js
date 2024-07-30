var obj = {
  name: "Max",
  display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABC",
};

obj.display.call(obj1); //ABC
