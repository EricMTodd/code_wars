function findEvenIndex(arr) {
  let rightSum;
  let leftSum;
  console.log(`arr: ${arr}`);
  console.log(`arr.length: ${arr.length}`);

  // console.log(`arr[2]: ${arr[2]}`);
  // console.log(`arr[2 + 1]: ${arr[2 + 1]}`); // same as console.log(`arr[2 + 1]: ${arr[2 + 1]}`);

  for (let i = 0; i < arr.length; i++) {
    console.log(`i: ${i}`);
    if (i >= 1) {
      for (let k = 0; k < i; k++) {
        console.log(`k: ${k}`);
      }
    }
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`j: ${j}`);
    }
  }
  return;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
