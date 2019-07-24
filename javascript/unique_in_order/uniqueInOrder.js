uniqueInOrder = str => {
  //your code here - remember iterable can be a string or an array.
  // Return an array that matches the given string without any repeating characters.
  let current = "";
  let previous = "";
  let arr = [];

  console.log(str);
  for (let i = 0; i < str.length; i++) {
    current = str[i];
    console.log(`current: ${current}`);
    if (current === 0) {
      previous = "";
      console.log(`previous: ${previous}`);
    } else {
      previous = str[i - 1];
      console.log(`previous: ${previous}`);
    }
    if (current != previous) {
      arr.push(str[i]);
      console.log(arr);
    }
  }
  console.log(`solution: ${arr}`);
  return arr;
};

uniqueInOrder("AAAABBBCCDAABBB");
