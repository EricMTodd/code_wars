function incrementString(strng) {
  console.log(`evaluating string: ${strng}`);
  let testCaseOne = "0123456789";
  let testCaseTwo = "abcdefghijklmnopqrstuvwxyz";
  let zeros = "";
  let alphanum = "";
  let ints = "";
  let intsLength = 0;
  let newInt = "";
  let newString = "";

  // Split the string between letters and integers by checking the value of each index and then adding letters and numbers into their own variable using concatination
  for (let i = 0; i < strng.length; i++) {
    if (strng[i] === "0") {
      zeros += strng[i];
    }
    for (let j = 0; j < testCaseOne.length; j++) {
      if (strng[i] == testCaseOne[j]) {
        ints = ints + strng[i];
      }
      intsLength = ints.length;
    }
    for (let k = 0; k < testCaseTwo.length; k++) {
      if (strng[i] == testCaseTwo[k]) {
        alphanum = alphanum + strng[i];
      }
    }
  }
  console.log(`alphanum: ${alphanum}`);
  console.log(`ints: ${ints}`);

  // Increment the number by 1
  if (ints[ints.length - 1] === undefined) {
    newInt = 1;
  } else {
    newInt = Number(ints);
    newInt += 1;
    newInt = newInt.toString();
    newInt = zeros + newInt;
  }
  if (newInt.length != intsLength && newInt[0] == "0") {
    newInt = newInt.slice(1);
  }

  newString = alphanum + newInt;

  console.log(`newString: ${newString}`);
  return newString;
}

incrementString("foobar000");
incrementString("foo");
incrementString("foobar001");
incrementString("foobar99");
incrementString("foobar099");
incrementString("");
