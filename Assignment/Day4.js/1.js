const students = [
    { name: "Ram", age: 18, scores: [70, 80, 90] },
    { name: "Shyam", age: 19, scores: [50, 40, 60] },
    { name: "Hari", age: 20, scores: [95, 85, 90] },
    { name: "Gopal", age: 21, scores: [55, 60, 65] },
  ];
  


function passedStudents(students) {
    return students
      .filter(student => student.scores.every(score => score >= 60))
      .map(student => student.name);
  }


console.log("Passed Students:", passedStudents(students));