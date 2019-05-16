function findEvenIndex(arr) {
  let solution;
  let rightSum;
  let leftSum;
  console.log(`arr: ${arr}`);
  console.log(`arr.length: ${arr.length}`);

  for (let i = 0; i < arr.length; i++) {
    rightSum = 0;
    leftSum = 0;
    console.log(`i: ${i}`);
    if (i >= 1) {
      for (let k = 0; k < i; k++) {
        console.log(`${k}: arr[k]: ${arr[k]}`);
        leftSum += arr[k];
        console.log(`leftSum: ${leftSum}`);
      }
    }
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${j}: arr[j]: ${arr[j]}`);
      if (j != undefined) {
        rightSum += arr[j];
        console.log(`rightSum: ${rightSum}`);
      }
    }
    if (rightSum === leftSum) {
      console.log("MATCH FOUND");
      console.log(`rightSum: ${rightSum}`);
      console.log(`leftSum: ${leftSum}`);
      solution = i;
      console.log(`Solution is index ${solution}`);
    } else {
      console.log("NO MATCH");
      console.log(`rightSum: ${rightSum}`);
      console.log(`leftSum: ${leftSum}`);
      solution = -1;
      console.log(`No solution, returning ${solution}`);
    }
  }
  return solution;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
