function incrementString(strng) {
  console.log(`evaluating string: ${strng}`);
  let testCaseOne = "0123456789";
  let testCaseTwo = "abcdefghijklmnopqrstuvwxyz";
  let alphanum = "";
  let ints = "";
  let newString = "";
  let newInt = "";

  // Split the string between letters and integers by checking the value of each index and then adding letters and numbers into their own variable using concatination
  for (let i = 0; i < strng.length; i++) {
    for (let j = 0; j < testCaseOne.length; j++) {
      if (strng[i] == testCaseOne[j]) {
        ints = ints + strng[i];
        console.log(`ints: ${ints}`);
      }
    }
    for (let k = 0; k < testCaseTwo.length; k++) {
      if (strng[i] == testCaseTwo[k]) {
        alphanum = alphanum + strng[i];
        console.log(`alphanum: ${alphanum}`);
      }
    }
  }
  // Increment the number by 1
  if (ints[ints.length - 1] === undefined) {
    newInt = 1;
    console.log(`newInt: ${newInt}`);
  } else {
    newInt = Number(ints[ints.length - 1]);
    newInt += 1;
    console.log(`newInt: ${newInt}`);
    console.log(typeof newInt);
  }
  // Rejoin string and integers while retaining the proper amount of 0s
  // If the number is a 9, be sure to increment to the next tenth appropriately
  console.log(ints);
  ints = ints.slice(0, -1);
  console.log(ints);
  console.log("got here");
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
