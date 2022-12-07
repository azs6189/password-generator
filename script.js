// Variables for password criteria

let letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

let button = document.querySelector("#generate");

// empty array that will hold our random password
password = [];
function generatePassword() {
	let nr_letters = parseInt(
		prompt("How many letters would you like in your password?")
	);
	let nr_symbols = parseInt(prompt("How many symbols would you like?"));
	let nr_numbers = parseInt(prompt("How many numbers would you like?"));
	// iterates through letters array to gather random letters and append to password array
	for (let i = 0; i < nr_letters; i++) {
		let letter = letters[Math.floor(Math.random() * letters.length)];
		password.push(letter);
	}

	// iterates through symbols array to gather random symbols and append to password array
	for (let i = 0; i < nr_symbols; i++) {
		let symbol = symbols[Math.floor(Math.random() * symbols.length)];
		password.push(symbol);
	}

	for (let i = 0; i < nr_numbers; i++) {
		let number = numbers[Math.floor(Math.random() * numbers.length)];
		password.push(number);
	}

	password.sort(() => Math.random() - 0.5);
	console.log(password.join(""));
	return password.join("");
}

function writePassword() {
	let finalPassword = generatePassword();
	let passwordText = document.querySelector("#password");
	passwordText.value = finalPassword;
}

button.addEventListener("click", writePassword);
