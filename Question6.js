// Question6: Return total marks for students with marks greater than 60
//after 20 marks have been added to those who scored less than 60

let students = [
  { name: "John", rollNumber: 31, marks: 80 },
  { name: "Jany", rollNumber: 15, marks: 69 },
  { name: "Max", rollNumber: 16, marks: 35 },
  { name: "Robert", rollNumber: 7, marks: 55 },
];

const totalMarks = students
  .map((item) => {
    if (item.marks < 60) {
      item.marks += 20;
    }
    return item;
  })
  .filter((item) => item.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
