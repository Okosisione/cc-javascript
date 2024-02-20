let displayArray = [];

for (let count =1; count <= 100; count++){
    if (count % 3 === 0 && count % 5 === 0) {
        displayArray.push("FizzBuzz\n");
    } else if (count % 5 === 0) {
        displayArray.push("Buzz\n");
    } else if (count % 3 === 0) {
        displayArray.push("fizz\n");
    } else {
        displayArray.push(String(count));
    }
}

document.write('<h1>' + displayArray + '</h1>');