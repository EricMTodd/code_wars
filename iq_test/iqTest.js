function iqTest(numbers) {
  let str = String(numbers);
  let arr = str.split(" ");
  let e = 0;
  let o = 0;
  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      e++;
      x = i + 1;
    } else if (arr[i] % 2 === 1) {
      o++;
      y = i + 1;
    }
    if (o === 1 && e > 1) {
      return y;
    }
    if (e === 1 && o > 1) {
      return x;
    }
  }
}

iqTest("2 4 7 8 10");
iqTest("1 2 2");
