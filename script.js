// function to generate first message
const generateDailyOutlookMsg = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0: return "Today will be an exceptional day!\n";
        break;
        case 1: return "Today will be the worst day of the week..\n";
        break;
        case 2: return "Today will be a rather normal day.\n";
        break;
        case 3: return "Today will be pretty good.\n";
        break;
        case 4: return "Today will be not great.\n";
        break;
        default: return "ERROR";
        break;
    }
}

// function to generate second message
const generateBreakfastMsg = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0: return "Lets start the day with some eggs.\n";
        break;
        case 1: return "Lets maybe have pancakes this morning.\n";
        break;
        case 2: return "Some yogurt and granola to start off.\n";
        break;
        case 3: return "How bout a coffee and some donuts.\n";
        break;
        case 4: return "For breakfast a bowl of our favorite cereal!\n";
        break;
        default: return "ERROR";
        break;
    }
}

// function to generate third message
const generateActivityMsg = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0: return "And a brisk walk around the block to finish things off.";
        break;
        case 1: return "Lastly well take a bike ride throug the park.";
        break;
        case 2: return "Follow up with some resistance training.";
        break;
        case 3: return "Then nothing but cartoons for the rest of the day!";
        break;
        default: return "ERROR";
        break;
    }
}

// function to return an array to hold all messages




// test message
console.log(generateDailyOutlookMsg());
console.log(generateBreakfastMsg());
console.log(generateActivityMsg());