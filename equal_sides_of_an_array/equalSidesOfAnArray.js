function findEvenIndex(arr) {
  let rightSum = 0;
  let leftSum = 0;

  console.log(`arr: ${arr}`);
  console.log(`arr.length: ${arr.length}`);

  // Test every index of the array
  for (let i = 0; i < arr.length; i++) {
    rightSum = arr[i];
    console.log(`${i}: ${arr[i]}`);
    console.log(`rightSum: ${rightSum}`);
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${j}; ${arr[j]}`);
      rightSum += arr[j];
      console.log(`rightSum: ${rightSum}`);
    }
  }
  // Find the ssum of all the numbers on either side of the index being evaluated in an attempt to find equal sums
  // If there is no equal sum, return -1
  return;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
