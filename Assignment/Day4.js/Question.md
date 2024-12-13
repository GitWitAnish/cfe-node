Problem Description: </br>
You are given an array of students, where each student is represented by an object </br>
containing their name, age, and an array of scores. Your task is to implement </br>
several functions to analyze and manipulate this student data.</br>

Sample Input Array:</br>
const students = [</br>
  { name: "Ram", age: 18, scores: [70, 80, 90] },</br>
  { name: "Shyam", age: 19, scores: [50, 40, 60] },</br>
  { name: "Hari", age: 20, scores: [95, 85, 90] },</br>
  { name: "Gopal", age: 21, scores: [55, 60, 65] },</br>
];</br>




Problem Tasks:</br>
1. Implement passedStudents(students)</br>
   - Function should return an array of names of students who passed all exams</br>
   - A student passes if ALL their scores are >= 60</br>
   - Expected Output: ["Ram", "Hari"]</br>

2. Implement averageScores(students)</br>
   - Function should return an array of objects with student names and their average scores</br>
   - Calculate average by summing all scores and dividing by number of scores</br>
   - Expected Output: [</br>
     { name: "Ram", averageScore: 80 },</br>
     { name: "Shyam", averageScore: 50 },</br>
     { name: "Hari", averageScore: 90 },</br>
     { name: "Gopal", averageScore: 60 }</br>
   ]</br>

3. Implement topPerformers(students, n)</br>
   - Function should return top N students based on their average scores</br>
   - If n is not provided, return top 2 students</br>
   - Expected Output for topPerformers(students, 2): </br>
     [</br>
       { name: "Hari", averageScore: 90 },</br>
       { name: "Ram", averageScore: 80 }</br>
     ]</br>

4. Implement failedSubjects(students)</br>
   - Function should return an object indicating in which subjects students most frequently fail</br>
   - A subject is considered failed if the score is below 60</br>
   - Expected Output: { </br>
     0: 1, // First subject failed by 1 student</br>
     1: 2, // Second subject failed by 2 students</br>
     2: 0  // Third subject failed by 0 students</br>
   }</br>

5. BONUS: Implement calculateGrade(students)</br>
   - Function should return an array of student objects with added grade property</br>
   - Grading Scale:</br>
     * 90-100: 'A'</br>
     * 80-89: 'B'</br>
     * 70-79: 'C'</br>
     * 60-69: 'D'</br>
     * Below 60: 'F'</br>
   - Grade should be based on average score</br>
   - Expected Output: [</br>
     { name: "Ram", scores: [70, 80, 90], averageScore: 80, grade: 'B' },</br>
     ...</br>
   ]</br>








Use JavaScript array methods like map(), filter(), find(), reduce(), every(), and others,</br>
 depending on the context and the desired outcome.</br>