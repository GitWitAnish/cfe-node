Number Guesser Project </br>

Objective:</br>
Create a Node.js program that generates a random number between 1 and 100. </br>
The user will guess the number via the console, </br>
and the program will provide feedback until the user guesses correctly.</br>

Requirements:</br>
Use the readline module to take input from the user.</br>
Generate a random number between 1 and 100 using Math.random().</br>
Inform the user if their guess is:</br>
Too high</br>
Too low</br>
Correct</br>

Keep prompting the user until the correct number is guessed.</br>
Use Promises to handle asynchronous input and provide a clean code structure.</br>

Expected Behavior:</br>
When the program starts, it generates a random number and waits for user input.</br>

After each guess, the program outputs one of the following:</br>
"Too high! Try again."</br>
"Too low! Try again."</br>
"Congratulations! You guessed the number."</br>
Once the correct guess is made, the program exits.</br>