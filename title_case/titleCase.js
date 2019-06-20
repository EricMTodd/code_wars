function titleCase(title, minorWords) {
  console.log(`title: ${title}, minorWords: ${minorWords}`);

  let solution = "";
  let newTitle = "";
  let newMinorWords = "";
  let titleArray = [];
  let minorWordsArray = [];
  let titleIndex = "";

  if (
    // Fix bug where last string is set to undefined because the minorWords are setting the afore mentioned value.
    title === "" ||
    title === undefined ||
    minorWords === "" ||
    minorWords === undefined
  ) {
    console.log(`IF ROUTE 1`);
    solution = undefined;
  } else {
    console.log(`IF ROUTE 2`);
    newTitle = title.toLowerCase();
    titleArray = newTitle.split(" ");
    console.log(`titleArray: ${titleArray}`);
    newMinorWords = minorWords.toLowerCase();
    minorWordsArray = newMinorWords.split(" ");
    console.log(`minorWordsArray: ${minorWordsArray}`);
  }
  // Always capitalize the first letter of the first word.
  // Evaluate the active index against each of the test cases to see if the words must be title cased.
  for (let i = 0; i < titleArray.length; i++) {
    titleIndex = titleArray[i];
    console.log(`titleIndex: ${titleIndex}`);
    console.log(`titleIndex[0]: ${titleIndex[0]}`);
    for (let k = 0; k < minorWordsArray.length; k++) {
      console.log(`minorWordsArray[k]: ${minorWordsArray[k]}`);
      if (titleArray[i] === minorWordsArray[k]) {
        console.log("MATCH");
      }
    }
  }

  console.log(`solution: ${solution}`);
  return solution;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
