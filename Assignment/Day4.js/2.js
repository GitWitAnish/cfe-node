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


  function averageScores(students) {
    return students.map(student => ({
      name: student.name,
      averageScore: calculateAverage(student.scores)
    }));
  }


  console.log("Average Scores:", averageScores(students));