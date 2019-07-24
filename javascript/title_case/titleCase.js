function titleCase(title, minorWords = "") {
  if (title.length === 0) {
    return "";
  }

  let minorArray = minorWords.toLowerCase().split(" ");
  let titleArray = title.toLowerCase().split(" ");

  titleArray[0] = capitalize(titleArray[0]);

  for (let i = 1; i < titleArray.length; i++) {
    if (minorArray.indexOf(titleArray[i]) === -1) {
      titleArray[i] = capitalize(titleArray[i]);
    }
  }

  return console.log(titleArray.join(" "));
}

let capitalize = str => {
  return str[0].toUpperCase() + str.slice(1);
};

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
titleCase("Spider-Man: Far From Home");
titleCase("HUMANs bRUTallY attacKeD BY A mUtateD treE", "A By");
titleCase("mEn GeT ShoT bY a nEw YoRk CiTy gAnG!", "by a ");
titleCase("eXtREmELy ferOciOus, MerCiLEss, COLd-blooDED cAt FIGHt");
titleCase("rEAl MEn ShOuLD nEveR ToUCh a cAMeRA", "a");
