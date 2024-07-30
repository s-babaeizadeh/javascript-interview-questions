var obj = {
  name: "Max",
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABC",
};

obj.display.call(obj1); //ABC

//if display be arrow function, it giving us empty console log, because
// in arrow function this is referring to global object or window object,
// inside that there is now variable name
