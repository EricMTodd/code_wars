console.log("twiceAsOld.js is running...");

// Requirements:
// Your fucntion takes two arguments:
// 1. current father's age (years)
// 2. current age of his sone (years)
// Caluculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old)

ageCalculator = (fatherAge, sonAge) => {
  console.log("fatherAge:", fatherAge);
  console.log("sonAge:", sonAge);
  let originalFatherAge = fatherAge;
  let years = 0;
  while (fatherAge !== sonAge * 2) {
    if (fatherAge < sonAge * 2) {
      fatherAge += 1;
      years += 1;
    } else if (fatherAge > sonAge * 2) {
      fatherAge -= 1;
      years += 1;
    } else {
      console.log("The Father is now twice his son's age.");
      console.log("years:", years);
    }
  }
  if (fatherAge < originalFatherAge) {
    console.log(`${years} years ago, the father was twice his son's age.`);
    return years;
  } else {
    console.log(`In ${years}, the father will be twice his son's age.`);
    return years;
  }
};

ageCalculator(64, 13);
