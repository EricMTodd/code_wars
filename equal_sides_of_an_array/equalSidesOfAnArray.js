function findEvenIndex(arr) {
  let activeIndex = 0;
  let arrLength = arr.length;
  let rightSum = 0;
  let leftSum = 0;

  console.log(arr);
  console.log(`arrLength: ${arrLength}`);

  // Test every index of the array
  for (let i = 0; i < arr.length; i++) {
    activeIndex = i;
    console.log(`activeIndex: ${activeIndex}`);
    for (let j = i + 1; j < arrLength; j++) {
      console.log(`arr[j]: ${arr[j]}`);
      rightSum += arr[j];
      console.log(`rightSum ${rightSum}`);
    }
  }
  // Find the sum of all the numbers on either side of the index being evaluated in an attempt to find equal sums
  // If there is no equal sum, return -1
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
