function titleCase(title, minorWords) {
  // Create a proper title using the title and given contraints.
  // Evaluate string for spaces, if a character follows a space, capitalize it unless it is an exception.
  console.log(`title: ${title}, minorWords: ${minorWords}`);
  let newString = title.toLowerCase();
  let firstLetter = "";
  let testCase = "";
  let finalString = "";

  for (let i = 0; i < newString.length; i++) {
    console.log(newString[i]);
    if (newString[i] !== " ") {
      testCase += newString[i];
    } else {
      firstLetter = testCase[0].toUpperCase();
      console.log(`firstLetter: ${firstLetter}`);
      console.log(`testCase: ${testCase}`);
      // Use an if check to see if the letter needs to be capitalized.
      // Remove the first letter of the testCase and replace it with the capitalized first letter.
      // Take the new capitalized word and add it to the final string.
    }
  }
  return;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
