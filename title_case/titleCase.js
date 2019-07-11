function titleCase(title, minorWords) {
  console.log(`title: ${title}, minorWords: ${minorWords}`);

  let solution = "";

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
    title = title.toLowerCase().split(" ");
    console.log(`title: ${title}`);
    minorWords = minorWords.toLowerCase().split(" ");
    console.log(`minorWords: ${minorWords}`);
    for (let i = 0; i < title.length; i++) {
      // for (let k = 0; k < minorWords.length; k++) {
      //   console.log(`minorWords[k]: ${minorWords[k]}`);
      //   if (title[i] === minorWords[k]) {
      //     console.log("MATCH");
      //   }
      // }
      title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
    title = title.join(" ");
    solution = title;
  }
  console.log(`solution: ${solution}`);
  return solution;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
