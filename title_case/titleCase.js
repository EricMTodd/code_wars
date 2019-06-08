function titleCase(title, minorWords) {
  // Create a proper title using the title and given contraints.
  // Evaluate string for spaces, if a character follows a space, capitalize it unless it is an exception.
  console.log(`title: ${title}, minorWords: ${minorWords}`);
  let newString = title.toLowerCase();
  let testCase = "";
  let finalString = "";

  for (let i = 0; i < newString.length; i++) {
    console.log(newString[i]);
    if (newString[i] === " ") {
      console.log("MATCH");
      newString = newString[i + 1].toUpperCase();
      console.log(`modified newString: ${newString}`);
    }
  }
  return;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
