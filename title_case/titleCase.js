function titleCase(title, minorWords) {
  // Create a proper title using the title and given contraints.
  // Evaluate string for spaces, if a character follows a space, capitalize it unless it is an exception.
  console.log(`title: ${title}, minorWords: ${minorWords}`);
  let newString = title.toLowerCase();
  let testCase = "";
  let solution = "";
  if (minorWords === undefined) {
    minorWords = "";
  } else {
    testCase += minorWords.toLowerCase();
  }

  // Loop through the title and the minor words until there is a variable
  // Use an if check to see if the letter needs to be capitalized.
  // Remove the first letter of the testCase and replace it with the capitalized first letter.
  // Take the new capitalized word and add it to the final string.

  if (solution.length < title.length) {
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] !== " ") {
        solution += newString[i];
      }
    }
    for (let i = 0; i < testCase.length; i++) {
      if (testCase[i] !== " ") {
      }
    }
  }

  return;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
