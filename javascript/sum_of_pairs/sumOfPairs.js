// Sample Lists
l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

// Function
const sumPairs = (ints, s) => {
  // console.log(`List being tested: ${ints}`);
  // console.log(`Required sum: ${s}`);
  let indicies = [];
  let sumSpace;
  let recordSumSpace;
  for (let i = 0; i < ints.length; i++) {
    ints[i] = ints[i];
    for (let k = 0; k < ints.length; k++) {
      ints[k] = ints[k];
      if (ints[i] + ints[k] === s && i !== k) {
        if (i > k) {
          sumSpace = i - k;
        } else {
          sumSpace = k - i;
        }
        if (recordSumSpace > sumSpace || recordSumSpace === undefined) {
          recordSumSpace = sumSpace;
          indicies = [ints[i], ints[k]];
        }
      }
    }
  }
  if (recordSumSpace === undefined) {
    console.log("No viable sum found.");
    return;
  } else {
    // console.log("Solution:", indicies);
    return indicies;
  }
};

sumPairs(l5, 10);
