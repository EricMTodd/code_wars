getMiddle = str => {
  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    console.log(`ROUTE 1: ${position}`);
    length = 1;
  } else {
    position = str.length / 2 - 1;
    console.log(`ROUTE 2: ${position}`);
    length = 2;
  }
  return str.substring(position, position + length);
};

console.log(getMiddle("handbanana"));
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
