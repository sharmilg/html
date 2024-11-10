'use strict';

    let dice_num = parseInt(prompt("Enter the number of dice: "));
    let targetSum = parseInt(prompt("Enter the target sum of dice eyes: "));

    if (dice_num > 0 && targetSum > 0) {
        let count = 0;

        function rollDice(dice_num) {
            let sum = 0;
            for (let i = 0; i < dice_num; i++) {
                sum += Math.floor(Math.random() * 6) + 1;
            }
            return sum;
        }

        for (let i = 0; i < 10000; i++) {
            let sum = rollDice(dice_num);
            if (sum === targetSum) {
                count++;
            }
        }
        let probability = (count / 10000) * 100;
        alert(`Probability to get sum ${targetSum} with ${dice_num} dice is ${probability.toFixed(2)}%`);
    }