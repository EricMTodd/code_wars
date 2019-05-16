function findSmallestInt(args) {
  let smallestInt = args[0];
  console.log(`args: ${args}`);

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (args[j] < smallestInt) {
        smallestInt = args[j];
        console.log(`smallestInt: ${smallestInt}`);
      }
    }
  }
  return smallestInt;
}

findSmallestInt([34, 15, 88, 2]);
findSmallestInt([34, -345, -1, 100]);
findSmallestInt([78, 56, 232, 12, 8]);
findSmallestInt([78, 56, 232, 12, 18]);
findSmallestInt([78, 56, 232, 412, 228]);
findSmallestInt([78, 56, 232, 12, 0]);
findSmallestInt([1, 56, 232, 12, 8]);
