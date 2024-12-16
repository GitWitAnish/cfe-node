const students = [
    { name: "Ram", age: 18, scores: [70, 80, 90] },
    { name: "Shyam", age: 19, scores: [50, 40, 60] },
    { name: "Hari", age: 20, scores: [95, 85, 90] },
    { name: "Gopal", age: 21, scores: [55, 60, 65] },
  ];



  function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
  }



  function calculateGrade(students) {
    return students.map(student => {
      const avgScore = calculateAverage(student.scores);
      let grade;
      if (avgScore >= 90) {
        grade = 'A';
      } else if (avgScore >= 80) {
        grade = 'B';
      } else if (avgScore >= 70) {
        grade = 'C';
      } else if (avgScore >= 60) {
        grade = 'D';
      } else {
        grade = 'F';
      }
      return { ...student, averageScore: avgScore, grade };
    });
  }
  


  console.log("Grades:", calculateGrade(students));