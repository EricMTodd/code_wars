function incrementString(strng) {
  console.log(strng);
  let testCase = "0123456789";
  let alphanum;
  let ints;
  let newString;

  // Split the string between letters and integers by checking the value of each index and then adding letters and numbers into their own variable using concatination
  for (let i = 0; i < strng.length; i++) {
    console.log(i);
    for (let j = 0; j < testCase.length; j++) {
      if (strng[i] != testCase[j]) {
        console.log("no match");
        // no more drinking until next week faggot
      } else {
        alphanum = alphanum + strng[i];
        console.log(`alphanum: ${alphanum}`);
      }
      console.log(j);
    }
  }
  // Increment the number by 1
  // Rejoin string and integers

  return;
}

incrementString("foobar000");
incrementString("foo");
incrementString("foobar001");
incrementString("foobar99");
incrementString("foobar099");
incrementString("");

// let testString = "Testing"; // returns "Testing"
// console.log(testString);
// newString = testString + "123"; // returns "Testing123"
// console.log(newString);
