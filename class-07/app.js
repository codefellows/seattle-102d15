'use strict'

function askName() {
    var userName = prompt('Hello.  What is your name?');
    console.log(userName);
    return userName;
}

function askOldComputer(potatoe){
    var oldComputer = prompt(potatoe + ', Do you like old computers?').toLowerCase();
    console.log(oldComputer);
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
    } else {
        alert('You have entered an incorrect response');
    }
}


// if (typeComputer === 'vic-20'){
    //     alert('Wow, that is really old');
    // }
    
    var userNameFromFunction = askName();
    var oldComputerFromFunction = askOldComputer(userNameFromFunction);
    var typeOfComputerFromFunction = typeOfComputer();
    likeOldComputers(oldComputerFromFunction)
    
