
const details = {
    name: "Anish Karki",
    gender: "Male",
    age: 19,
    course: "Computer Engineering"    
    
  };
  
  console.log(details);
  

 function canVote() {
    if (details.age >= 18) {
      console.log(`eligible to vote.`);
    } else {
      console.log(`not eligible to vote.`);
    }
  }


  canVote();