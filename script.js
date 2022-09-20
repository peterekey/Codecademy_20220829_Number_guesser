let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9) + 1;

const getAbsoluteDistance = (guess, aim) => {
    return Math.abs(guess - aim);
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    
    if (humanGuess > 10) {
        alert('Enter a number between 1 and 10');
    } else {
        let humanDiff = getAbsoluteDistance(humanGuess, secretNumber); // Math.abs(humanGuess - secretNumber);
        let computerDiff = getAbsoluteDistance(computerGuess, secretNumber); // Math.abs(computerGuess - secretNumber);
    
        if (humanDiff <= computerDiff) {
            return true;
        } else {
            return false;
        }
    }
}

const updateScore = winner => {
    switch(winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
        default:
            console.log('There\'s a problem!');
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}