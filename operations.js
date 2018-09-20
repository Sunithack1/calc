const add = (x, y) => (+x) + (+y); //using the unary operator to coerce the parameters into numbers in case the input is a string.
const subtract = (x, y) => (+x) - (+y); 
const multiply = (x, y) => (+x) * (+y); 
const divide = (x, y) => (+x) / (+y);
const remainder = (x, y) => (+x) % (+y); 

const validateNumbers = (x, y) => {
	if(isNaN(x) || isNaN(y)) {
		return false;
	}
	return true;
}

module.exports = { 
	add,
	subtract,
	multiply,
	divide,
	remainder,
	validateNumbers,
 }