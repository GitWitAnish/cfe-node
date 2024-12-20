const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const number = Math.floor(Math.random() * 100) + 1;

function askNum() {
  readline.question('Guess a number between 1 and 100: ', guess => {
    const num = parseInt(guess);

    if (num === number) {
      console.log('Congratulations! You guessed the number.');
      readline.close();
    }
    
    else {
      const diff = Math.abs(num - number);

      if (diff > 10) {
        if (num < number) {
          console.log('Too low! Try again.');
        } else if (num > number) {
          console.log('Too high! Try again.');
        }
      } 
      
      else {
        if (num < number) {
          console.log('A little higher! Try again.');
        } else if (num > number) {
          console.log('A little lower! Try again.');
        }
      }

      askNum();

    }
  });
}

askNum();
