function alphabetWar(fight) {
  let leftValues = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  };

  let rightValues = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < fight.length; i++) {
    let target = fight[i];

    if (rightValues[target]) {
      rightSum += rightValues[target];
    } else if (leftValues[target]) {
      leftSum += leftValues[target];
    }
  }

  if (rightSum > leftSum) {
    return "Right side wins!";
  } else if (leftSum > rightSum) {
    return "Left side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z"));
console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("wwwwww"));
