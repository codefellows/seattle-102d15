'use strict'

// var rogerName = document.getElementById('roger');
// var h2element = document.createElement('h2');
// h2element.textContent = "Hello Roger.  Welcome to the Page";
// rogerName.appendChild(h2element);

function askName() {
    var userName = prompt('Hello.  What is your name?');
    console.log(userName);
    return userName;
}

function askOldComputer(potatoe){
    var oldComputer = prompt(potatoe + ', Do you like old computers?').toLowerCase();
    console.log('before the while ' + oldComputer);
    while((oldComputer !== 'no') && (oldComputer !== 'yes')){
        console.log('in while but before re-assign ' + oldComputer);
        oldComputer = prompt(potatoe + ', Do you like old computers?').toLowerCase();
        console.log('in while but after re-assign ' + oldComputer);
    }
    return oldComputer;
}

function typeOfComputer(){
    var typeComputer = prompt('What type of computer do you have?');
    console.log(typeComputer);
}

function likeOldComputers(oldComputerFromFunction){
    if (oldComputerFromFunction === 'yes'){
        alert('Awesome.  I like old computers too!');
    } else if (oldComputerFromFunction === 'no'){
        alert('How can I cahnge you mind about that?');
    }
}


if (typeOfComputerFromFunction === 'vic-20'){
        alert('Wow, that is really old');
    }
    
    var userNameFromFunction = askName();
    var oldComputerFromFunction = askOldComputer(userNameFromFunction);
    var typeOfComputerFromFunction = typeOfComputer();
    likeOldComputers(oldComputerFromFunction)

    var letterAnswer = 'a'
    var guess = 5;
    var letterGuess = prompt('Guess a letter (single letter only)');

    for (var i = 0; i < guess; i = i + 1){
        if (letterGuess === letterAnswer){
            alert('DING DING DING.  You got it right');
            break;
        } else {
            var left = guess - i;
            letterGuess = prompt('Try Again.  Please enter another letter.  ' + left + ' left.');
        }
    }
    
