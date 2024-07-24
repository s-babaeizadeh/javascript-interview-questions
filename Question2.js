//Question2- What is the output

const userStatus = {
  username: "John",
  level: 19,
  health: 90,
};

const data = JSON.stringify(userStatus, ["level", "health"]);

console.log(data); //{"level":19,"health":90}
