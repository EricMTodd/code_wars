function findEvenIndex(arr) {
  let solution;

  console.log(`arr: ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    let rightSum = 0;
    let leftSum = 0;

    if (i >= 1) {
      for (let k = 0; k < i; k++) {
        leftSum += arr[k];
      }
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (j != undefined) {
        rightSum += arr[j];
      }
    }
    if (rightSum === leftSum) {
      solution = i;
      console.log(`Match found at index ${solution}`);
    }
  }
  if (solution === undefined) {
    console.log("No matches found, returning -1");
    solution = -1;
  }
  return solution;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
