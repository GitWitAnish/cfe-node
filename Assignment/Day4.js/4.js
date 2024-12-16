const students = [
    { name: "Ram", age: 18, scores: [70, 80, 90] },
    { name: "Shyam", age: 19, scores: [50, 40, 60] },
    { name: "Hari", age: 20, scores: [95, 85, 90] },
    { name: "Gopal", age: 21, scores: [55, 60, 65] },
  ];





  function failedSubjects(students) {
    const failures = {};
  
    students.forEach(student => {
      student.scores.forEach((score, index) => {
        if (score < 60) {
          failures[index] = (failures[index] || 0) + 1;
        }
      });
    });
  
    return failures;
  }


  console.log("Failed Subjects:", failedSubjects(students));