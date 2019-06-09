function titleCase(title, minorWords) {
  console.log(`title: ${title}, minorWords: ${minorWords}`);
  let newTitle = "";
  let solution = "";

  if (title === "" || title === undefined) {
    console.log(`IF ROUTE 1`);
    newTitle = undefined;
    solution = newTitle;
  } else {
    console.log(`IF ROUTE 2`);
    solution = title[0];
    solution = solution.toUpperCase();
    newTitle = title.toLowerCase();
    console.log(`newTitle: ${newTitle}`);
    for (let i = 1; i < newTitle.length; i++) {
      solution += newTitle[i];
    }
  }

  console.log(`solution: ${solution}`);
  return solution;
}

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
