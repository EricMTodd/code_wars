getCount = str => {
  let vowelCount = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
      if (str[i] === vowels[k]) {
        vowelCount++;
      }
    }
  }

  console.log(`The number of vowels in ${str} is ${vowelCount}`);
  return vowelCount;
};

getCount("abracadabra");
getCount("mephistopheles");
getCount("The quick brown fox jumped over the lazy dog");
