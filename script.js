// function to generate first message
const generateDailyOutlookMsg = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0: return "Today will be an exceptional day!";
        break;
        case 1: return "Today will be the worst day of the week..";
        break;
        case 2: return "Today will be a rather normal day.";
        break;
        case 3: return "Today will be pretty good.";
        break;
        case 4: return "Today will be not great.";
        break;
        default: return "ERROR";
        break;
    }
}

// function to generate second message
const generateBreakfastMsg = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0: return "Lets start the day with some eggs.";
        break;
        case 1: return "Lets maybe have pancakes this morning.";
        break;
        case 2: return "Some yogurt and granola to start off.";
        break;
        case 3: return "How bout a coffee and some donuts.";
        break;
        case 4: return "For breakfast a bowl of our favorite cereal!";
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
const generateRandomMsg = () => {
    let msgArray = [];
    msgArray[0] = generateDailyOutlookMsg();
    msgArray[1] = generateBreakfastMsg();
    msgArray[2] = generateActivityMsg();
    return msgArray;
}



// test message
let message = generateRandomMsg();
console.log(message.join('\n'));
