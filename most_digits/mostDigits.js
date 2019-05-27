function findLongest(array) {
  // code here
  let current = "";
  let testCase = "";
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    testCase = "" + current;
    console.log(`testCase: ${testCase}`);
    for (let k = 0; k < testCase.length; k++) {
      console.log(testCase[k]);
    }
  }
  return;
}

findLongest([1, 10, 100]);
findLongest([9000, 8, 800]);
findLongest([8, 900, 500]);
