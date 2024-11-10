'use strict'
    const numRolls = parseInt(prompt("Enter the number of dice rolls:"));

    if (numRolls < 0) {
        alert("Please enter a valid positive number for dice rolls.");
    } else {
        let totalSum = 0;

        for (let i = 0; i < numRolls; i++) {
            totalSum += Math.floor(Math.random() * 6) + 1;
        }
        alert(`The sum of the results of ${numRolls} dice rolls is: ${totalSum}`);
    }