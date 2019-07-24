function GetSum(a, b) {
  let temp = 0;
  let sum = 0;

  if (a > b) {
    for (let i = b; i <= a; i++) {
      temp = i;
      sum += temp;
    }
  } else {
    for (let i = a; i <= b; i++) {
      temp = i;
      sum += temp;
    }
  }
  console.log(`Solution: ${sum}`);
  return sum;
}

GetSum(-17, -17);
GetSum(12, 9);
GetSum(1, 10);
