function findLongest(array) {
  // code here
  console.log(array);
  let current = "";
  let solution = "";

  for (let i = 0; i < array.length; i++) {
    current = "" + array[i];
    console.log(`current.length: ${current.length}`);
    if (current.length > solution) {
      solution = current.length;
      console.log(`solution: ${solution}`);
      console.log(`${array[solution]}`);
    }
  }
  return;
}

findLongest([1, 10, 100]);
findLongest([9000, 8, 800]);
findLongest([8, 900, 500]);
