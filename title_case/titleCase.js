function titleCase(title, minorWords) {
  console.log(`title: ${title}, minorWords: ${minorWords}`);
  let newTitle = "";
  let solution = "";

  for (let i = 0; i < newTitle.length; i++) {
    solution += newTitle[i];
  }

  console.log(`solution: ${solution}`);
  return;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
