const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const number = Math.floor(Math.random() * 100) + 1;
  
  function ask() {
    readline.question('Guess a number between 1 and 100: ', guess => {
      const num = parseInt(guess);
      if (num === number) {
        console.log('Congratulations! You guessed the number.');
        readline.close();
      } else {
        const diff = num - number;
        if (diff > 10) {
          console.log(num < number ? 'Too low! Try again.' : 'Too high! Try again.');
        } else {
          console.log(num < number ? 'A little higher! Try again.' : 'A little lower! Try again.');
        }
        ask();
      }
    });
  }
  
  ask();
  