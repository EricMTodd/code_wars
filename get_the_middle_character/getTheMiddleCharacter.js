getMiddle = str => {
  console.log(str);

  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
};

getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
