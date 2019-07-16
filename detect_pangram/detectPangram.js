function isPangram(string) {
  let testCase = "abcdefghijklmnopqrstuvwxyz";

  string = string.toLowerCase();

  for (let i = 0; i < testCase.length; i++) {
    if (string.indexOf(testCase[i]) == -1) return false;
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
