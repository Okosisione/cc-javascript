
let firstNumber = Number(prompt("Type the first number"));
let secondNumber = Number(prompt("Type the second number"));
let thirdNumber = Number(prompt("Type the third number"));

//You can use variables in conditions too!

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    message = firstNumber + ' is the greatest number';
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    message = secondNumber + ' is the greatest number';
} else {
    message = thirdNumber + ' is the greatest number';
}
    document.write('<h1>' + message + '</h1>');