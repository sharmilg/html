'use strict';
    if (confirm('Should I calculate the square root?')) {
        let num = prompt('Enter a number');
        num = parseFloat(num);
        if (num < 0) {
            alert("The square root of a negative number is not defined.");
        } else {
            let squareRoot = Math.sqrt(num);
            alert(`The square root of ${num} is ${squareRoot}.`);
        }
    } else {
        alert('The square root is not calculated');
    }