uniqueInOrder = str => {
  //your code here - remember iterable can be a string or an array.
  // Return an array that matches the given string without any repeating characters.
  let current = "";
  let previous = "";
  let arr = [];

  console.log(str);
  for (let i = 0; i < str.length; i++) {
    current = i;
    console.log(current);
  }
};

uniqueInOrder("AAAABBBCCDAABBB");
