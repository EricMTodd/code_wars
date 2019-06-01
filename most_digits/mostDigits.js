function findLongest(array) {
  // code here
  console.log(array);
  let current = "";
  let solution = "";

  for (let i = 0; i < array.length; i++) {
    current = "" + array[i];
    console.log(`current.length: ${current.length}`);
    console.log(`solution.length: ${solution.length}`);
    if (current.length > solution.length) {
      solution = current;
      console.log(`solution.length: ${solution.length}`);
    }
  }
  console.log(typeof solution);
  solution = Number(solution);
  console.log(typeof solution);
  console.log(`FINAL SOLUTION: ${solution}`);
  return solution;
}

findLongest([1, 10, 100]);
findLongest([9000, 8, 800]);
findLongest([8, 900, 500]);
