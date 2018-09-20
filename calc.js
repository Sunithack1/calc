const operations = require('./operations.js');
const readLine = require('readline');

//use readline to create command line interface
const rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

//Initial welcome screen
console.log(`
	Calc.js

	Wecome to the Node.js calculator app!
	Version: 1.0.0
	Usage: the user will be prompted for two numbers
	then asked to select their operation of choice
	`);

rl.question('Enter the first number: ', (x) => {
	rl.question('Enter the second number: ', (y) => {
		rl.question(`
Please select from the following options:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (*)
[4] Division (/)
[5] Modulo (%)

Enter your choice: `, (choice) => {
	if(!operations.validateNumbers(x, y)){
		console.log('Only numbers are allowed! Please restart the program.')
	} else {
	  switch(choice) {
	  	case '1':
	  	  console.log(`The sum pf ${x} and ${y} is ${operations.add(x, y)}.`);
	  	  break;
	  	case '2':
	  	  console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
          break;
        case '3':
          console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
          break;
        case '4':
          console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
	      break;
	    case '5':
	      console.log(`The remainder of ${x} and ${y} is ${operations.remainder(x, y)}.`);
	      break;
	    default: 
	      console.log('Please restart the program and select a number between 1 and 4');
	      break;
	  }   
	}
	rl.close();
    });
  });
});
 