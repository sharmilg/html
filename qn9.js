'use strict';
    let num = parseInt(prompt('Enter an integer: '));
    if (num > 1) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            alert(`${num} is a prime number.`);
        } else {
            alert(`${num} is not a prime number.`);
        }
    } else {
        alert(`${num} is not a prime number.`);
    }