const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let filteredWords = [
  "I",
  "You",
  "He",
  "She",
  "They",
  "it",
  "we",
  "because",
  "the",
  "am",
  "are",
  "is",
  "be",
  "how",
  "where",
  "'s",
  "by",
  "like"
];

let posGreetingWords = [
  "fine",
  "good",
  "okay",
  "alright",
  "chilling",
  "cool",
  "happy"
];
let negGreetingWords = [
  "pretty bad",
  "tired",
  "bad",
  "dreadful",
  "sad",
  "sick"
];

function answerFilter(str) {
  let answer2Arr;
  answer2Arr = str.split(" ");
  // console.log("answer2Arr", answer2Arr);
  if (answer2Arr[answer2Arr.length - 1] === "") {
    // console.log("answer filter1", answer2Arr[answer2Arr.length - 2]);
    return answer2Arr[answer2Arr.length - 2];
  } else {
    // console.log("answer filter2", answer2Arr[answer2Arr.length - 1]);
    return answer2Arr[answer2Arr.length - 1];
  }
}

function greetingBot(str) {
  let splitWords = str.split(" ");
  if (splitWords[splitWords.length - 1] === "") {
    splitWords = splitWords[splitWords.length - 2].toLowerCase();
  } else {
    splitWords = splitWords[splitWords.length - 1].toLowerCase();
  }
  // console.log("split words", splitWords);
  if (posGreetingWords.includes(splitWords)) {
    return console.log("Bot: Kinda happy to hear that");
  } else if (negGreetingWords.includes(splitWords)) {
    return console.log("Bot: Meh. Stop complaining");
  }
}

function repeatQuestions() {
  reader.question(``, answer => {
    console.log("why " + answerFilter(answer) + " ?");
    repeatQuestions();
  });
}

reader.question(`Bot: My name is Annoybot, How are you today? \n`, res => {
  greetingBot(res);

  reader.question(
    `Bot: Anyway! So what do you want to talk about today?\n`,
    answer => {
      console.log(
        `Bot: ${answer}....That's just great...totally not lame... why ${answer} though?\n`
      );
      repeatQuestions();
    }
  );
});
