function titleCase(title, minorWords) {
  console.log(`title: ${title}, minorWords: ${minorWords}`);

  let solution = "";
  let newTitle = "";
  let newMinorWords = "";
  let titleArray = [];
  let minorWordsArray = [];

  if (
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
  for (let i = 0; i < titleArray.length; i++) {
    console.log(titleArray[i]);
  }
  for (let i = 0; i < minorWordsArray.length; i++) {
    console.log(minorWordsArray[i]);
  }

  console.log(`solution: ${solution}`);
  return solution;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
