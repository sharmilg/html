'use strict'
    let Name = prompt("Enter your name.");
    const room = Math.floor(Math.random() * 4) + 1;
        switch (room) {
            case 1 :
                alert(Name + ', You are Gryffindor.');
                break;
            case 2:
                alert(Name + ', You are Slytherin.');
                break;
            case 3 :
                alert(Name + ', You are Hufflepuff.');
                break;
            case 4 :
               alert(Name + ', You are Ravenclaw.');
               break;
        }