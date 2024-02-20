//1. prompt the user to type in their phone number 
//2. save the input in a varible 
//3. check the length of the input if it meets the requirement
// 4. give the corresponding output
// loops  is block of code, that let you run a process again and again


let phoneNumber = prompt("please type in your phone number: \nTo exit, type close");
let message; 

while (true) {
    if (phoneNumber === 'close' || phoneNumber ==='Close' || phoneNumber === 'CLOSE') {
        break;
    }
    else if (phoneNumber.length < 11) {
        // message = phoneNumber + " is less than 11 digits."
        phoneNumber = prompt(phoneNumber + "is less 11 digits.\n please type again.")
    } else if (phoneNumber.length > 11) {
        // message = phoneNumber + " is greater than 11 digits."
        phoneNumber = prompt(phoneNumber + "is greater than than 11 digits.\n please type again.")
    } else {
        message = "The phone number is correct."
        break;
    }
    
}

document.write("<h1>" + message + "</h1>")