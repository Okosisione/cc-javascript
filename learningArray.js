let alphabets = ['a', 'b', 'c'];

document.write("<h1>" + alphabets + "<h1>");
document.write("<h1>" + alphabets.length + "<h1>");


let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7, 9];
let namesOfFruits = ['apple', 'orange', 'mango', 'pineapple'];


document.write( "<h1>" + ' The index of evenNumbers array is ' + evenNumbers.length + "<h1>");
document.write( "<h1>" + ' The index of oddNumbers array is ' + oddNumbers.length + "<h1>" );
document.write("<h1>" + ' The index of namesOfFruits array is ' + namesOfFruits.length + "<h1>" );

document.write("<h1>" + ' The index of orange in namesofFruits ' + (namesOfFruits.length - 3) + "<h1>");
document.write( "<h1>" + ' The index of pineapple in namesofFruits ' + (namesOfFruits.length -1) +"<h1>")

document.write("<h1>" + namesOfFruits + "<h1>")
namesOfFruits.push('banana')
document.write("<h1>"+ namesOfFruits + "<h1>")


namesOfFruits.push('coconut')
document.write("<h1>"+ namesOfFruits + "<h1>")

namesOfFruits.pop('coconut')
document.write("<h1>"+ namesOfFruits + "<h1>")

// always use let when declearing an array
// array you use box ba
// in array you use comas
// to being out the last element in an array you use [-1], but js dont accept that you use alphabet.length -1
// sting + varable
// you remove element is pop 
// To add element is push
// last in first out... in teams of pop
// first element of an array is [0]
